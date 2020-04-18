import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
declare var JitsiMeetExternalAPI: any;



@Component({
  selector: 'app-video-chat-room',
  templateUrl: './video-chat-room.component.html',
  styleUrls: ['./video-chat-room.component.css']
})
export class VideoChatRoomComponent implements OnInit, OnChanges {
  @Input() jitsiMeetRoomName: string;
  @Input() noVideo = false;
  jitsiApi: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.connectRoom(changes.jitsiMeetRoomName.currentValue);
  }

  ngOnInit(): void {
  }

  connectRoom(roomName: string) {
    if(this.jitsiApi) {
      this.jitsiApi.dispose();
    }

    const toolbarButtons = ['microphone', 'fodeviceselection', 'filmstrip', 'tileview', 'settings'];
    if(!this.noVideo) {
      //toolbarButtons.push('camera');
    }

    const domain = 'meet.jit.si';
    const options = {
        roomName: roomName,
        width: '100%',
        height: '100%',
        parentNode: document.querySelector('#meet'),
        configOverwrite: {
            enableCalendarIntegration: false,
            disableDeepLinking: true,
            startWithVideoMuted: this.noVideo,
            startAudioOnly: this.noVideo,


        },
        interfaceConfigOverwrite: {
            DEFAULT_REMOTE_DISPLAY_NAME: 'andere feestganger',
            DEFAULT_LOCAL_DISPLAY_NAME: 'jij dus',
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            BRAND_WATERMARK_LINK: '',
            GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
            DISPLAY_WELCOME_PAGE_CONTENT: false,
            DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
            APP_NAME: 'Huisfeest!',
            NATIVE_APP_NAME: 'Huisfeest',
            PROVIDER_NAME: 'AliceIrisElmar',
            LANG_DETECTION: false, // Allow i18n to detect the system language
            INVITATION_POWERED_BY: false,

            /**
             * If we should show authentication block in profile
             */
            AUTHENTICATION_ENABLE: false,

            /**
             * The name of the toolbar buttons to display in the toolbar. If present,
             * the button will display. Exceptions are "livestreaming" and "recording"
             * which also require being a moderator and some values in config.js to be
             * enabled. Also, the "profile" button will not display for user's with a
             * jwt.
             */
            TOOLBAR_BUTTONS: [
                'microphone', 'camera',
                'fodeviceselection',
                'filmstrip',
                'tileview', 'settings'
            ],

            SETTINGS_SECTIONS: [ 'devices' ],

            // Determines how the video would fit the screen. 'both' would fit the whole
            // screen, 'height' would fit the original video height to the height of the
            // screen, 'width' would fit the original video width to the width of the
            // screen respecting ratio.
            VIDEO_LAYOUT_FIT: 'both',

            /**
             * Whether to only show the filmstrip (and hide the toolbar).
             */
            filmStripOnly: false,

            /**
             * Whether to show thumbnails in filmstrip as a column instead of as a row.
             */
            VERTICAL_FILMSTRIP: true,

            // A html text to be shown to guests on the close page, false disables it
            CLOSE_PAGE_GUEST_HINT: false,
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            RANDOM_AVATAR_URL_PREFIX: false,
            RANDOM_AVATAR_URL_SUFFIX: false,
            FILM_STRIP_MAX_HEIGHT: 120,

            // Enables feedback star animation.
            ENABLE_FEEDBACK_ANIMATION: false,
            DISABLE_FOCUS_INDICATOR: false,
            DISABLE_DOMINANT_SPEAKER_INDICATOR: false,

            /**
             * Whether the speech to text transcription subtitles panel is disabled.
             * If {@code undefined}, defaults to {@code false}.
             */
            DISABLE_TRANSCRIPTION_SUBTITLES: false,

            /**
             * Whether the ringing sound in the call/ring overlay is disabled. If
             * {@code undefined}, defaults to {@code false}.
             */
            DISABLE_RINGING: false,
            AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(255,255,255,0.4)',
            AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(255,255,255,0.2)',
            POLICY_LOGO: null,
            LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9
            REMOTE_THUMBNAIL_RATIO: 1, // 1:1
            // Documentation reference for the live streaming feature.
            LIVE_STREAMING_HELP_LINK: 'https://jitsi.org/live',

           /**
            * Whether the mobile app Jitsi Meet is to be promoted to participants
            * attempting to join a conference in a mobile Web browser. If
            * {@code undefined}, defaults to {@code true}.
            */
            MOBILE_APP_PROMO: false,

           /**
            * Maximum coeficient of the ratio of the large video to the visible area
            * after the large video is scaled to fit the window.
            */
            MAXIMUM_ZOOMING_COEFFICIENT: 1.3,

            /*
            * If indicated some of the error dialogs may point to the support URL for
            * help.
            */
            SUPPORT_URL: 'https://community.jitsi.org/',

           /**
            * Whether the connection indicator icon should hide itself based on
            * connection strength. If true, the connection indicator will remain
            * displayed while the participant has a weak connection and will hide
            * itself after the CONNECTION_INDICATOR_HIDE_TIMEOUT when the connection is
            * strong.
            */
            CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,

           /**
            * How long the connection indicator should remain displayed before hiding.
            * Used in conjunction with CONNECTION_INDICATOR_AUTOHIDE_ENABLED.
            */
            CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,

           /**
            * If true, hides the connection indicators completely.
            */
            CONNECTION_INDICATOR_DISABLED: true,

           /**
            * If true, hides the video quality label indicating the resolution status
            * of the current large video.
            */
            VIDEO_QUALITY_LABEL_DISABLED: true,

           /**
            * If true, will display recent list
            */
            RECENT_LIST_ENABLED: true,

            // Names of browsers which should show a warning stating the current browser
            // has a suboptimal experience. Browsers which are not listed as optimal or
            // unsupported are considered suboptimal. Valid values are:
            // chrome, chromium, edge, electron, firefox, nwjs, opera, safari
            OPTIMAL_BROWSERS: [ 'chrome', 'chromium', 'firefox', 'nwjs', 'electron' ],

            // Browsers, in addition to those which do not fully support WebRTC, that
            // are not supported and should show the unsupported browser page.
            UNSUPPORTED_BROWSERS: [],

           /**
            * A UX mode where the last screen share participant is automatically
            * pinned. Valid values are the string "remote-only" so remote participants
            * get pinned but not local, otherwise any truthy value for all participants,
            * and any falsy value to disable the feature.
            *
            * Note: this mode is experimental and subject to breakage.
            */
            AUTO_PIN_LATEST_SCREEN_SHARE: 'remote-only',

           /**
            * If true, presence status: busy, calling, connected etc. is not displayed.
            */
            DISABLE_PRESENCE_STATUS: true,

           /**
            * If true, notifications regarding joining/leaving are no longer displayed.
            */
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,

           /**
            * Decides whether the chrome extension banner should be rendered on the landing page and during the meeting.
            * If this is set to false, the banner will not be rendered at all. If set to true, the check for extension(s)
            * being already installed is done before rendering.
            */
            SHOW_CHROME_EXTENSION_BANNER: false

           /**
            * When enabled, the kick participant button will not be presented for users without a JWT
            */
            // HIDE_KICK_BUTTON_FOR_GUESTS: false

           /**
            * How many columns the tile view can expand to. The respected range is
            * between 1 and 5.
            */
            // TILE_VIEW_MAX_COLUMNS: 5,

           /**
            * Specify custom URL for downloading android mobile app.
            */
            // MOBILE_DOWNLOAD_LINK_ANDROID: 'https://play.google.com/store/apps/details?id=org.jitsi.meet',

           /**
            * Specify URL for downloading ios mobile app.
            */
            // MOBILE_DOWNLOAD_LINK_IOS: 'https://itunes.apple.com/us/app/jitsi-meet/id1165103905',

           /**
            * Specify mobile app scheme for opening the app from the mobile browser.
            */
            // APP_SCHEME: 'org.jitsi.meet',

           /**
            * Specify the Android app package name.
            */
            // ANDROID_APP_PACKAGE: 'org.jitsi.meet',

           /**
            * Override the behavior of some notifications to remain displayed until
            * explicitly dismissed through a user action. The value is how long, in
            * milliseconds, those notifications should remain displayed.
            */
            // ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 15000,
        }
    };

    this.jitsiApi = new JitsiMeetExternalAPI(domain, options);
    if (this.noVideo) {
      (document.querySelector('#meet') as HTMLElement).style.visibility = 'hidden';
    }
    else {
      (document.querySelector('#meet') as HTMLElement).style.visibility = 'visible';
    }
  }

}
