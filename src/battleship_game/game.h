#ifndef GAME_H_
#define GAME_H_

#include <vector>
#include <map>

#include "player.h"
#include "board.h"
#include "src/battleship_game/Event.h"

namespace battleship {

typedef std::pair<Player*, Board*> PlayerAndBoard;
typedef std::pair<std::string, PlayerAndBoard> MapNameToData;

class Game {
  public:
    ~Game();
    void Init();
    void Play();
    const int NumPlayers() const;
    const int CurrentPlayer() const;
    const bool IsStarted() const;
    const bool IsWon() const;
    const int Winner() const;
    EventResult HandleEvent(Event* event);
    EventResult HandlePlayerJoined(PlayerJoinedData* data);

  private:
    int num_players_ = 0;
    int current_player_ = 0;
    bool is_started_ = false;
    bool is_won_ = false;
    std::vector<Player*> players_;
    std::vector<Board*> boards_;
    std::map<std::string, PlayerAndBoard> player_to_boards;
};  // class Game

}  // namespace battleship

#endif  // GAME_H_
