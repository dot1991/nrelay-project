import { Client, Library, PacketHook, TextPacket, PlayerTextPacket } from "nrelay";

@Library({
    name: "Hello Plugin",
    author: "Extacy",
    enabled: true
})
class HelloPlugin {
    
    constructor() { }

    @PacketHook()
    onText(client: Client, textPacket: TextPacket): void {
        
        // Must be a private message
        if (textPacket.recipient !== client.playerData.name) {
            return;
        }

        // Check that the message was "hello"
        if (!textPacket.text.startsWith("hello")) {
            return;
        }

        // Send a reply!
        const playerTextPacket = new PlayerTextPacket();
        playerTextPacket.text = `/tell ${textPacket.name} Hello!`;
        client.io.send(playerTextPacket);
    }
}