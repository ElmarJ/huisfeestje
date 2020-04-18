export class RoomInfo {
  constructor(
    public urlName: string,
    public title = '',
    public jitsiRoomName = '',
    public backgroundImageFilename: string,
    public linkedRooms: string[],
    public djVolume = 0,
    public introText = '',
    public maxVisitors = 50,
    public visitors = 0,
    public noVideo = false
  ) { }
}
