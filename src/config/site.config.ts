// ==============================================================
// Edit this file to customize your wedding invitation.
// All visual text / dates / photos / RSVP endpoint live here.
// ==============================================================

export type TimelineItem = { time: string; label: string; icon?: string };
export type FamilySide = { title: string; lines: string[] };

export type SiteConfig = {
  title: string;
  lang: string;
  /** Primary accent color (used for buttons, highlights). */
  accent: string;

  /** Couple / hero section. */
  couple: {
    bride: { name: string; fullName: string; birthday: string; photo: string };
    groom: { name: string; fullName: string; birthday: string; photo: string };
    /** "Save The Date" cover image (portrait). */
    coverPhoto: string;
    /** Big hero photo used behind the invitation details. */
    heroPhoto: string;
  };

  /** The wedding day itself. ISO string: "2026-01-06T11:45:00+07:00" */
  weddingDate: string;
  /** Vietnamese label shown in the calendar (e.g. "Tháng 01"). */
  monthLabel: string;
  /** Year label shown next to the big day number (e.g. "Năm 2026"). */
  yearLabel: string;
  /** Optional lunar / alternate calendar annotation. */
  lunarNote: string;
  /** Weekday Vietnamese label (e.g. "Thứ Ba"). */
  weekdayLabel: string;

  loveStory: {
    title: string;
    paragraph: string;
    closing: string[];
  };

  families: {
    left: FamilySide;
    right: FamilySide;
  };

  invitation: {
    /** Line above the big day number, e.g. "Thân mời bạn đến dự lễ thành hôn được tổ chức vào 11:45, Thứ Ba" */
    intro: string;
    /** Venue name */
    venueName: string;
    /** Full venue address */
    venueAddress: string;
  };

  timeline: TimelineItem[];

  rsvp: {
    heading: string;
    namePlaceholder: string;
    question: string;
    yes: string;
    no: string;
    submit: string;
    /** Optional endpoint (POST JSON). Leave empty to just log in the browser. */
    endpoint: string;
  };

  loveBox: {
    heading: string;
    body: string;
    placeholder: string;
    sendButton: string;
  };

  /** Background music (public path or URL). */
  audio: {
    src: string;
    title: string;
  };

  footer: {
    signature: string;
  };
};

export const siteConfig: SiteConfig = {
  title: "Our Wedding Day",
  lang: "vi",
  accent: "#e94b6a",

  couple: {
    bride: {
      name: "Thanh Hằng",
      fullName: "THANH HẰNG",
      birthday: "20.08.2001",
      photo: "/assets/photos/p5.png",
    },
    groom: {
      name: "Minh Trí",
      fullName: "MINH TRÍ",
      birthday: "06.05.1998",
      photo: "/assets/photos/p4.jpg",
    },
    coverPhoto: "/assets/photos/cover.jpg",
    heroPhoto: "/assets/photos/p2.jpg",
  },

  weddingDate: "2026-01-06T11:45:00+07:00",
  monthLabel: "Tháng 01",
  yearLabel: "Năm 2026",
  lunarNote: "(Tức ngày 20 tháng 12 năm 2025)",
  weekdayLabel: "Thứ Ba",

  loveStory: {
    title: "OUR LOVE STORY",
    paragraph:
      "Giữa muôn vàn gặp gỡ, chúng mình may mắn tìm thấy nhau. Từ những ngày đầu bỡ ngỡ, qua bao vui buồn và thử thách, tình yêu vẫn lớn dần, hóa thành sự thấu hiểu và đồng hành. Hóa ra hạnh phúc chẳng phải điều xa xôi, mà là có một người để cùng sẻ chia, cùng nắm tay đi hết chặng đường dài phía trước.",
    closing: [
      "“Chúng mình gặp nhau giữa dòng đời",
      "và rồi chúng mình…”",
    ],
  },

  families: {
    left: {
      title: "Nhà Trai",
      lines: [
        "Ông. Phạm Minh Hải",
        "Bà. Nguyễn Mai Thu",
        "TP. Hà Nội",
      ],
    },
    right: {
      title: "Nhà Gái",
      lines: [
        "Ông. Trần Anh Tài",
        "Bà. Nguyễn Thanh Mai",
        "TP. Quảng Ninh",
      ],
    },
  },

  invitation: {
    intro:
      "Thân mời bạn đến dự lễ thành hôn được tổ chức vào 11:45, Thứ Ba",
    venueName: "Luxury Quảng Ninh",
    venueAddress: "Phường Bãi Cháy, tỉnh Quảng Ninh",
  },

  timeline: [
    { time: "10:30", label: "Đón tiếp khách" },
    { time: "10:45", label: "Lễ thành hôn" },
    { time: "11:00", label: "Khai tiệc" },
  ],

  rsvp: {
    heading: "Xác nhận tham dự",
    namePlaceholder: "Họ và tên",
    question: "Bạn sẽ tham dự chứ?",
    yes: "Có, tôi sẽ tham dự",
    no: "Tôi bận, rất tiếc không thể tham dự",
    submit: "Gửi xác nhận",
    endpoint: "",
  },

  loveBox: {
    heading: "Hộp Yêu Thương",
    body:
      "Cảm ơn bạn đã dành tình cảm cho chúng mình! Sự hiện diện của bạn chính là món quà ý nghĩa nhất, và chúng mình vô cùng trân quý khi được cùng bạn chia sẻ niềm hạnh phúc trong ngày trọng đại này.",
    placeholder: "Gửi lời chúc...",
    sendButton: "Bắn tim",
  },

  audio: {
    src: "/assets/audio/music.mp3",
    title: "Until You",
  },

  footer: {
    signature: "Made with love",
  },
};

export default siteConfig;
