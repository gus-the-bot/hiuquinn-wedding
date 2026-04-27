// ==============================================================
// Edit this file to customize your wedding invitation.
// All visual text / dates / photos / RSVP endpoint live here.
// ==============================================================

export type TimelineItem = { time: string; label: string };

export type SiteConfig = {
  title: string;
  lang: string;
  /** Primary accent color (used for buttons, highlights). */
  accent: string;

  /** Couple / hero section. */
  couple: {
    bride: { name: string; fullName: string; birthday?: string; photo: string };
    groom: { name: string; fullName: string; birthday?: string; photo: string };
    /** "Save The Date" cover image (portrait). */
    coverPhoto: string;
    /** Big hero photo used behind the invitation details. */
    heroPhoto: string;
  };

  /** The wedding day itself. ISO string, e.g. "2026-05-24T11:00:00+07:00" */
  weddingDate: string;
  /** Vietnamese label shown in the calendar (e.g. "Tháng 05"). */
  monthLabel: string;
  /** Year label shown next to the big day number (e.g. "Năm 2026"). */
  yearLabel: string;
  /** Optional lunar / alternate calendar annotation. */
  lunarNote: string;
  /** Weekday Vietnamese label (e.g. "Chủ Nhật"). */
  weekdayLabel: string;

  loveStory: {
    title: string;
    paragraph: string;
    closing: string[];
  };

  invitation: {
    /** Line above the big day number */
    intro: string;
    /** Venue name */
    venueName: string;
    /** Sub-venue / hall */
    venueHall?: string;
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
  title: "Trung Hiếu & Thảo Quyên — Wedding Invitation",
  lang: "vi",
  accent: "#b81d1d",

  couple: {
    bride: {
      name: "Thảo Quyên",
      fullName: "VÕ HUỲNH THẢO QUYÊN",
      photo: "/assets/photos/p3.jpg",
    },
    groom: {
      name: "Trung Hiếu",
      fullName: "HUỲNH TRUNG HIẾU",
      photo: "/assets/photos/p4.jpg",
    },
    coverPhoto: "/assets/photos/cover.jpg",
    heroPhoto: "/assets/photos/p2.jpg",
  },

  weddingDate: "2026-05-24T11:00:00+07:00",
  monthLabel: "Tháng 05",
  yearLabel: "Năm 2026",
  lunarNote: "Nhằm ngày 08 tháng 04 năm Bính Ngọ",
  weekdayLabel: "Chủ Nhật",

  loveStory: {
    title: "OUR LOVE STORY",
    paragraph:
      "Giữa muôn vàn gặp gỡ, chúng mình may mắn tìm thấy nhau. Từ những ngày đầu bỡ ngỡ, qua bao vui buồn và thử thách, tình yêu vẫn lớn dần, hóa thành sự thấu hiểu và đồng hành. Hóa ra hạnh phúc chẳng phải điều xa xôi, mà là có một người để cùng sẻ chia, cùng nắm tay đi hết chặng đường dài phía trước.",
    closing: [
      "“Chúng mình gặp nhau giữa dòng đời",
      "và rồi chúng mình…”",
    ],
  },

  invitation: {
    intro:
      "Trân trọng kính mời đến dự buổi tiệc chung vui cùng gia đình chúng tôi, Chủ Nhật",
    venueName: "MINH TOÀN GALAXY",
    venueHall: "SẢNH EROS — TẦNG 3",
    venueAddress: "306 Đường 2/9, P. Hòa Cường, Tp. Đà Nẵng",
  },

  timeline: [
    { time: "11:00", label: "Đón khách" },
    { time: "12:00", label: "Lễ thành hôn" },
    { time: "12:15", label: "Khai tiệc" },
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
      "Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi. Rất hân hạnh được đón tiếp!",
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
