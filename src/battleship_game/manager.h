#ifndef MANAGER_H_
#define MANAGER_H_

#include <map>
#include <algorithm>
#include <string>
#include <random>

#include "src/battleship_game/Event.h"
#include "src/battleship_game/game.h"

namespace internal {

 

}

namespace battleship {

    typedef std::map<std::string, Game*> GameIDsToGames;
    class Manager {
        public:
            std::string random_string( size_t length ) {
                auto randchar = []() -> char {
                    const char charset[] =
                    "0123456789"
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    "abcdefghijklmnopqrstuvwxyz";
                    const size_t max_index = (sizeof(charset) - 1);
                    return charset[ rand() % max_index ];
                };
                std::string str(length,0);
                std::generate_n( str.begin(), length, randchar );
                return str;
            }
            
            EventResult HandleEvent(Event* event) {
                if (event->GetType() == EventType::CreateGame) {
                    std::string game_id = random_string(10);
                    while (game_mappings_.find(game_id) != game_mappings_.end()) {
                        game_id = random_string(10);
                    }
                    game_mappings_.emplace(std::pair<std::string, Game*>(game_id, new Game()));
                    return EventResult(2, "Created Game ID");
                } else {
                    GameIDsToGames::iterator it = game_mappings_.find(event->GetGameID());
                    if (it == game_mappings_.end()) {
                        return EventResult(2, "The game  does not exist.");
                    }
                    Game* game = it->second;
                    return game->HandleEvent(event);

                }
            }
        private:
            GameIDsToGames game_mappings_;
    };
}

#endif