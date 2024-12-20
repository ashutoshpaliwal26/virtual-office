class PeerService {
    public peer;

    constructor() {
        this.peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.l.google.com:19302"
                }
            ]
        });
        
    }

    public async getOffer (){
        if(this.peer){
            const offer = await this.peer.createOffer();
            await this.peer.setLocalDescription(new RTCSessionDescription(offer));
            return offer;
        }
    }

    public async getAnswer (offer:RTCSessionDescriptionInit) {
        if(this.peer) {
            await this.peer.setRemoteDescription(offer);
            const ans = await this.peer.createAnswer();
            await this.peer.setLocalDescription(new RTCSessionDescription(ans));
            return ans;
        }
    }
    
    public async setLocalDescription (ans:RTCSessionDescriptionInit){
        if(this.peer){
            await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
        }
    }
}

export default new PeerService();