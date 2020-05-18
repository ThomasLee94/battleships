#ifndef SRC_BATTLESHIP_GAME_EVENT_H_
#define SRC_BATTLESHIP_GAME_EVENT_H_

#include <string>
#include <vector>

namespace battleship {

    // Event types to be used when registering an event with the engine.
    enum class EventType {
        None = 0,
        PlayerJoined,
        CreateGame,
        JoinGame,
        ShowPlacedShip,
        PollGame
    };

    class EventData {
    };

    class Event {
        public:
            explicit Event(std::string game_id) : game_id_(game_id) {}
            virtual EventType GetType() const = 0;
            virtual void* GetData() = 0;
            
            void SetHandled(bool handled) { is_handled_ = handled; }
            std::string GetGameID() { return game_id_; }
        private:
            bool is_handled_;
            std::string game_id_;
    };


    class EventResult {
        public:
            EventResult(int status_code, const std::string& message) : 
                    status_code_(status_code), message_(message) {}
            int GetStatusCode() { return status_code_; }
            const std::string& GetMessage() { return message_; }
            void SetGameId(std::string gameId) { game_id_ = gameId; }
            std::string GetGameId() { return game_id_; }

            void SetGrid(int** grid) { grid_ = grid; }
            int** GetGrid() { return grid_; }

            void AddPlayer(std::string player) {
                players.emplace_back(player);
            }
            std::vector<std::string> GetPlayers() {
                return players;
            }
            void SetIsWon(bool isWon) {
                isWon_ = isWon;
            }
            bool GetIsWon() {
                return isWon_;
            }
        private:
            int status_code_;
            std::string message_;
            std::string game_id_;
            int** grid_;
            std::vector<std::string> players;
            bool isWon_;


    };

    class PlayerJoinedData : public EventData {
        public:
            PlayerJoinedData(std::string player_name) : player_name_(player_name) {};
            std::string player_name_;
            std::string GetPlayerName() const { return player_name_; }

    };

    class PlayerJoinedEvent : public Event {
        public:
            explicit PlayerJoinedEvent(std::string game_id, const std::string& name) : Event(game_id) {
                data_ = new PlayerJoinedData(name);
            }
            EventType GetType() const override { return EventType::PlayerJoined; }
            void* GetData() override { return data_; }
            
        private:
            PlayerJoinedData* data_;
        
    };

    class CreateGameEvent : public Event {
        public:
            CreateGameEvent() : Event("") {}
            EventType GetType() const override { return EventType::CreateGame; }
            void* GetData() override { return nullptr; }
    };

    class ShowPlacedShipData : public EventData {
        public:
            ShowPlacedShipData(std::string player_name, std::string target_name) : player_name_(player_name), target_name_(target_name) {};
            std::string target_name_;
            std::string player_name_;
            std::string GetPlayerName() const { return player_name_; }
            std::string GetTargetName() const { return target_name_; }

    };

    class ShowPlacedShipEvent : public Event {
        public:
            ShowPlacedShipEvent(std::string gameId, std::string playerName, std::string targetName) : Event(gameId) {
                data_ = new ShowPlacedShipData(playerName, targetName);
            }
            EventType GetType() const override { return EventType::ShowPlacedShip; }
            void* GetData() override { return data_; }
        private:
            ShowPlacedShipData* data_;
    };

    class PollGameEvent : public Event {
        public:
            PollGameEvent(std::string gameId) : Event(gameId) {}
            EventType GetType() const override { return EventType::PollGame; }
            void* GetData() override { return nullptr; }
    };

};

#endif 