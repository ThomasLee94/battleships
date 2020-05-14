#ifndef SRC_BATTLESHIP_GAME_EVENT_H_
#define SRC_BATTLESHIP_GAME_EVENT_H_

#include <string>

namespace battleship {

    // Event types to be used when registering an event with the engine.
    enum class EventType {
        None = 0,
        PlayerJoined,
        CreateGame,
        JoinGame
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
        private:
            int status_code_;
            std::string message_;
            std::string game_id_;

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

    // TODO(tom) create new event for game
    class CreateGameEvent : public Event {
        public:
        // TODO: FIX ERROR - below doesnt compile
            CreatGameEvent() : Event("") {}
            EventType GetType() const override { return EventType::CreateGame; }
            void* GetData() override { return nullptr; }
    };

};

#endif 