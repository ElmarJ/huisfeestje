export class ChatMessage {
  constructor(
    public text: string,
    public name = 'Anoniempje',
    public imageUrl = '',
    public photoUrl: string = null,
    public timestamp: any = null) {}
}
