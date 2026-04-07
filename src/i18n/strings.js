export const supportedLocales = ["en", "zh", "ja", "ko"];
export const defaultLocale = "en";

export const navItems = [
  { slug: "", key: "home" },
  { slug: "product", key: "product" },
  { slug: "how-it-works", key: "howItWorks" },
];

export const translations = {
  en: {
    brand: "Fiber Link",
    nav: {
      home: "Home",
      product: "Product",
      howItWorks: "How It Works",
      requestDemo: "Request Demo",
      source: "GitHub",
      privacy: "Privacy Policy",
      tos: "Terms of Service",
    },
    labels: {
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
      locale: "Language",
      comingSoon: "Coming soon",
      requestDemoTitle: "Request Demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
        hero: {
      eyebrow: "Early Access to App Before Launch",
      title: "Fiber Link",
      description:
        "Be first in line and experience the product before others. Apply for demo access and secure your slot.",
      primary: "Request Demo",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "A payment layer for community platforms. Let admins activate creator rewards, let members tip in one click, and let creators track real earnings — without asking anyone to set up a crypto wallet.",
      viewOnGithub: "View on GitHub",
      joinText: "Join Waitlist",
      footerTag: "Join 15,725+ others on the waitlist",
      updateTitle: "Announcements",
      updateSubtitle: "",
      joinHeading: "Want first access?",
      joinSubheading: "Apply now and we will review your request within one week.",
      community: "Join Community",
      social: "Follow On Socials",
        updates: [
          {
            datePrefix: "",
            date: "Mar 26, 2026",
            title: "Weekly Progress Update",
            text: "Quick progress update: we confirmed the latest status and will keep posting progress updates in this thread.",
            ctaText: "",
            cta: "",
            author: "Akane",
            authorAvatar: "https://talk.nervos.org/user_avatar/talk.nervos.org/akane/120/10683_2.png",
            authorUrl: "https://talk.nervos.org/t/dis-fiber-link-a-ckb-fiber-based-pay-layer-tipping-micropayments-for-communities/9845/28?u=keith",
            postNumber: 28,
          },
          {
            datePrefix: "",
            date: "Mar 22, 2026",
            title: "Weekly Update: Fiber Link Milestone 3",
            text: "[Weekly Update] We completed the Admin controls scope for Milestone 3, including monitoring summary, global rate limiting controls backup capture, and restore plan generation.",
            ctaText: "",
            cta: "",
            author: "Akane",
            authorAvatar: "https://talk.nervos.org/user_avatar/talk.nervos.org/akane/120/10683_2.png",
            authorUrl: "https://talk.nervos.org/t/dis-fiber-link-a-ckb-fiber-based-pay-layer-tipping-micropayments-for-communities/9845/26?u=keith",
            postNumber: 26,
          },
          {
            datePrefix: "",
            date: "Mar 14, 2026",
            title: "Milestone 2 Materials Update",
            text: "M2 acceptance materials have been moved to a permanent self-hosted folder for easier review and ongoing accessibility.",
            ctaText: "",
            cta: "",
            author: "Akane",
            authorAvatar: "https://talk.nervos.org/user_avatar/talk.nervos.org/akane/120/10683_2.png",
            authorUrl: "https://talk.nervos.org/t/dis-fiber-link-a-ckb-fiber-based-pay-layer-tipping-micropayments-for-communities/9845/25?u=keith",
            postNumber: 25,
          },
 ],

      highlights: [
        "Built for community operators",
        "Creator-first earning distribution",
        "No wallet migration required",
      ],
      cardTitle: "What you can do",
      cards: [
        "Members reward creators in one click.",
        "Admins onboard monetization without app-wide wallet changes.",
        "Creators view real earnings in a single, readable ledger.",
        "Community growth and contribution loops are reinforced naturally.",
      ],
    },

    product: {
      eyebrow: "The product",
      title: "A payment layer for communities, not a power-user wallet.",
      intro:
        "Install Fiber Link as a hosted service in your community stack and activate sustainable creator economics fast.",
      cards: [
        {
          title: "For admins",
          description:
            "Set rules, configure payouts, and scale monetization without onboarding every user to cryptographic setup.",
        },
        {
          title: "For creators",
          description:
            "Receive ongoing support from your members and track earnings across posts, discussions, and streams.",
        },
        {
          title: "For members",
          description:
            "Tip your favorite contributors in tiny payments without leaving the community context.",
        },
      ],
      visualTitle: "Creator economy dashboard",
      visualCaption:
        "A lightweight, operator-friendly view for tracking rewards and payout readiness.",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Where communities reward contribution daily.",
      description:
        "From creator collectives to technical forums, Fiber Link turns recurring support behavior into measurable creator income.",
      cases: [
        {
          title: "Creator communities",
          description: "Reward explainers, answerers, and artists as they publish value for your core audience.",
        },
        {
          title: "Developer forums",
          description: "Encourage quality answers with small appreciation payments and recurring encouragement loops.",
        },
        {
          title: "Learning circles",
          description: "Keep classes and knowledge networks healthy with gratitude-based micro-support.",
        },
        {
          title: "Fan and subculture groups",
          description: "Fuel exclusive creator-led engagement and keep high-effort content producers invested.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Fiber Network",
      title: "Fiber Network as a Payment Channel for your community infrastructure.",
      description:
        "Fiber Network exposes a payment channel for creator rewards and contributor economics while your community UI remains in control.",
      steps: [
        {
          title: "Community activates Fiber Link",
          description:
            "Operators configure platform-level settings: branding, payout policy, and user role behavior.",
        },
        {
          title: "Members tip in context",
          description:
            "A support action looks like a normal platform interaction with instant payment confirmation.",
        },
        {
          title: "Creator balances update",
          description:
            "Earnings are visible instantly and consistently across your community experience.",
        },
        {
          title: "Withdrawal and controls",
          description:
            "Creators request conversion or payout windows while operators keep operational oversight.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What teams ask before piloting.",
      items: [
        {
          question: "Is this a wallet product?",
          answer:
            "No. Fiber Link is a community payment layer. Members can support creators quickly while admins keep configuration in one place.",
        },
        {
          question: "Who benefits first?",
          answer:
            "Community admins gain control and clarity, creators gain an earnings path, and members gain simple support mechanics.",
        },
        {
          question: "Do members need technical payment knowledge?",
          answer:
            "No. The user experience stays community-first and hides technical details from normal contributors.",
        },
      ],
      cta: "Need a more specific flow for your community?",
    },
    requestDemo: {
      eyebrow: "Request Demo",
      title: "Request access to the live Fiber Link demo.",
      description:
        "You can preview the product at demo.fiberlink.me, but self-serve signup is not open yet. Request access and we will review your use case, contact you within one week, and provision a demo account for qualified teams.",
      panelTitle: "How demo access works",
      panelCopy:
        "This is a startup-style flow: preview first, submit your request, then our team follows up within one week.",
      preview: "Demo",
      steps: [
        "Preview the live product experience at ",
        "Submit your team details and intended use case",
        "We review requests and respond within one week",
        "Approved teams receive manually provisioned demo accounts",
      ],
      form: {
        name: "Name",
        email: "Work email",
        org: "Company or Community",
        role: "Role",
        notes: "Use case / Notes",
        submit: "Request Demo",
        submitting: "Submitting...",
        helper: "We use this information to prioritize requests and follow up within one week.",
        configMissing: "Demo request intake is not configured yet. Please add the request endpoint before collecting submissions.",
        error: "We could not submit your request right now. Please try again shortly.",
        placeholderName: "Your name",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Creator Hub",
        placeholderNotes:
          "Tell us what community you run, what you want to evaluate, and how you would use Fiber Link.",
        success:
          "Request received. Our team will review it and contact you within one week if your use case is a fit for demo access.",
        formSubtitle: "Tell us about your community. We'll review and follow up within one week.",
      },
      roleOptions: [
        "Founder / Owner",
        "Community Admin",
        "Moderator / Ops",
        "Creator / Contributor",
        "Investor / Partner",
        "Other",
      ],
    },
    footer: {
      text: "Fiber Link helps communities reward contribution and unlock sustainable creator income.",
      legal: "Built for CKB Fiber integration and product teams shipping creator economies.",
    },
    tos: {
      title: "Terms of Service",
      lastUpdated: "Last updated: April 2026",
      body: [
        { heading: "Acceptance of Terms", text: "By accessing or using Fiber Link, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service." },
        { heading: "Description of Service", text: "Fiber Link provides a community payment infrastructure that enables micro-payments between community members and creators via the CKB Fiber Network." },
        { heading: "User Responsibilities", text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account." },
        { heading: "Prohibited Conduct", text: "You may not use Fiber Link for any unlawful purpose, to transmit harmful content, or to interfere with the integrity of the service." },
        { heading: "Intellectual Property", text: "All content, trademarks, and technology within Fiber Link are the property of Random Walk or its licensors and are protected by applicable laws." },
        { heading: "Limitation of Liability", text: "Fiber Link is provided as-is. To the maximum extent permitted by law, we disclaim all warranties and shall not be liable for any indirect or consequential damages." },
        { heading: "Changes to Terms", text: "We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the revised terms." },
        { heading: "Contact", text: "For questions about these terms, contact us at legal@random-walk.co.jp." },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      body: [
        { heading: "Information We Collect", text: "We collect information you provide directly, such as name, email, and organization when you request a demo or contact us." },
        { heading: "How We Use Information", text: "We use collected information to process demo requests, communicate with you, and improve our service. We do not sell your personal data." },
        { heading: "Data Storage", text: "Your data is stored securely and retained only as long as necessary to fulfill the purposes outlined in this policy." },
        { heading: "Cookies", text: "We use minimal, essential cookies to maintain session state. No third-party tracking cookies are used." },
        { heading: "Third-Party Services", text: "We may use third-party services for form submission and analytics. These services have their own privacy policies." },
        { heading: "Your Rights", text: "You have the right to access, correct, or delete your personal data at any time by contacting us." },
        { heading: "Contact", text: "For privacy inquiries, contact us at privacy@random-walk.co.jp or visit https://www.random-walk.co.jp." },
      ],
    },
    images: {
      home: {
        query: "creator economy community",
        fallback: "/images/home-fallback.svg",
      },
      product: {
        query: "creator payout dashboard",
        fallback: "/images/product-fallback.svg",
      },
      how: {
        query: "creator team collaboration",
        fallback: "/images/how-fallback.svg",
      },
    },
  },
  zh: {
    brand: "Fiber Link",
    nav: {
      home: "首页",
      product: "产品",
      howItWorks: "工作原理",
      requestDemo: "申请演示",
      source: "GitHub",
      privacy: "Privacy Policy",
      tos: "Terms of Service",
    },
    labels: {
      theme: "主题",
      light: "浅色",
      dark: "深色",
      system: "跟随系统",
      locale: "语言",
      comingSoon: "即将推出",
      requestDemoTitle: "申请演示",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
        hero: {
      eyebrow: "Launch your community rewards early",
      title: "Fiber Link",
      description:
        "先加入等待列表，先于他人抢先体验产品。提交演示申请，即可锁定优先体验名额。",
      primary: "申请演示",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "A payment layer for community platforms. Let admins activate creator rewards, let members tip in one click, and let creators track real earnings — without asking anyone to set up a crypto wallet.",
      viewOnGithub: "View on GitHub",
      joinText: "申请加入等候名单",
      footerTag: "已有 10,000+ 人加入预发布名单",
      updateTitle: "最新动态",
      updateSubtitle: "版本和上线公告。",
      joinHeading: "想要优先体验？",
      joinSubheading: "提交申请后 1 周内评估并回复。",
      community: "加入社区",
      social: "关注更新",
      updates: [
        {
          date: "April 15, 2026",
          title: "Beta Access V2",
          desc: "Beta 版本计划于 2026 年 4 月 15 日对外发布，等待列表用户将优先获得邀请。",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
        {
          date: "April 2, 2026",
          title: "加入社区",
          desc: "加入社群，获取产品动态和功能答疑。",
          author: "Hary, Co Founder",
          authorUrl: "#",
        },
        {
          date: "March 30, 2026",
          title: "关注渠道",
          desc: "关注实时进展，查看我们如何推进和发布。",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
      ],
      highlights: ["专为社区运营而建", "更清晰的创作者收益", "低摩擦即时支付"],
      cardTitle: "Fiber Link 能做到",
      cards: ["成员可一键支持创作者。", "管理员无需让每个用户学习复杂支付。", "创作者可见收益变化。", "持续激励让社区讨论更活跃。"],
    },

    product: {
      eyebrow: "产品说明",
      title: "我们提供面向社区的支付层，而不是钱包产品。",
      intro:
        "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制，降低交易门槛。",
      cards: [
        {
          title: "给管理员",
          description:
            "设置社区规则、分润策略和结算策略，降低平台改造成本。",
        },
        {
          title: "给创作者",
          description:
            "在发布内容的同一环境内实时获得支持，积累可追溯的收益记录。",
        },
        {
          title: "给成员",
          description:
            "在熟悉界面完成小额支持，流程简洁、门槛更低。",
        },
      ],
      visualTitle: "创作者数据看板",
      visualCaption: "聚焦创作者与运营可读的收益与支持状态。",
    },
    useCases: {
      eyebrow: "使用场景",
      title: "适用于内容与社群高度活跃的场景。",
      description:
        "无论是垂类社区还是兴趣社区，都能把真实互动转换为真实收益。",
      cases: [
        {
          title: "创作社区",
          description: "对高质量内容贡献及时打赏，鼓励持续输出。",
        },
        {
          title: "开发者社区",
          description: "对解决问题、优质答复和持续贡献者进行即时支持。",
        },
        {
          title: "学习社群",
          description: "课程分享者与优质答疑者可持续获得成员认可。",
        },
        {
          title: "粉丝群体",
          description: "让忠实粉丝通过小额支持表达长期认可。",
        },
      ],
    },
    howItWorks: {
      eyebrow: "工作原理",
      title: "Fiber Network：社区支付通道架构。",
      description: "Fiber Network 将创作者支付能力作为可插拔通道接入，让社区保持原有产品体验的同时完成付款与分账。",
      steps: [
        {
          title: "社区接入 Fiber Link",
          description: "管理员完成接入并设定支持和结算策略。",
        },
        {
          title: "成员在内容内支持",
          description: "操作轻量，支付反馈在页面内即时完成。",
        },
        {
          title: "收益实时更新",
          description: "创作者与管理员同步看到收益状态变化。",
        },
        {
          title: "可控的提现和结算",
          description: "系统保留可控窗口，不让资金行为失控。",
        },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "先回答常见疑问。",
      items: [
        {
          question: "这是不是钱包产品？",
          answer: "不是。Fiber Link 是面向社区的收款层，核心目标是简化运营和创作者提现路径。",
        },
        {
          question: "谁是主要买方？",
          answer: "社区管理员和运营团队，特别是希望提升参与度与创作者粘性的团队。",
        },
        {
          question: "成员需要懂区块链吗？",
          answer: "不需要。我们将底层复杂度屏蔽在产品层。",
        },
      ],
      cta: "如果你有独特的场景，我们愿意先帮你画一版流程。",
    },
    requestDemo: {
      eyebrow: "申请演示",
      title: "申请访问 Fiber Link 在线演示环境。",
      description: "你可以先访问 demo.fiberlink.me 预览产品，但目前还未开放自助注册。提交申请后，我们会评估你的使用场景，在一周内联系你，并为合适的团队手动开通演示账户。",
      panelTitle: "演示申请流程",
      panelCopy: "这是一条标准 startup demo request 流程：先预览，再申请，由我们人工联系并开通。",
      preview: "Demo",
      steps: ["先在", "提交团队信息与预期使用场景", "我们会在一周内完成审核并联系你", "通过审核的团队将收到手动开通的演示账户"],
      form: {
        name: "姓名",
        email: "工作邮箱",
        org: "公司 / 社区",
        role: "角色",
        notes: "使用场景 / 备注",
        submit: "申请演示",
        submitting: "提交中...",
        helper: "我们会基于这些信息判断优先级，并在一周内与你联系。",
        configMissing: "演示申请入口尚未配置接收端点，请先完成接入配置后再开放表单。",
        error: "当前无法提交申请，请稍后再试。",
        placeholderName: "你的名字",
        placeholderEmail: "you@company.com",
        placeholderOrg: "产品社区",
        placeholderNotes: "请说明你的社区类型、希望验证的场景，以及最关心的指标。",
        success: "申请已收到。我们会评估你的场景，并在一周内联系你安排演示访问。",
      },
      roleOptions: ["创始人 / 主理人", "管理员", "运营", "创作者", "投资人 / 合作方", "其他"],
    },
    footer: {
      text: "Fiber Link 帮助社区把贡献转化为创作者可持续收入。",
      legal: "面向 CKB Fiber 集成场景，面向成长型社区产品。",
    },
    tos: {
      title: "服务条款",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [
        { heading: "接受条款", text: "使用 Fiber Link 即表示您同意遵守本服务条款。如不同意，请停止使用本服务。" },
        { heading: "服务说明", text: "Fiber Link 基于 CKB Fiber Network，为社区提供创作者打赏与小额支付基础设施。" },
        { heading: "用户责任", text: "您有责任保管好账号凭证，并对账号下的所有操作负责。" },
        { heading: "禁止行为", text: "不得将 Fiber Link 用于违法目的、传播有害内容或破坏服务完整性。" },
        { heading: "知识产权", text: "Fiber Link 内所有内容、商标及技术归 Random Walk 或其许可方所有，受相关法律保护。" },
        { heading: "责任限制", text: "服务按现状提供，在法律允许范围内，我们不承担任何间接或后果性损害责任。" },
        { heading: "条款变更", text: "我们保留随时修改本条款的权利，继续使用即视为接受修订后的条款。" },
        { heading: "联系方式", text: "如有疑问，请发送邮件至 legal@random-walk.co.jp。" },
      ],
    },
    privacy: {
      title: "隐私政策",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [
        { heading: "信息收集", text: "我们收集您在申请演示或联系我们时主动提供的信息，如姓名、邮箱及所属机构。" },
        { heading: "信息使用", text: "所收集信息用于处理演示申请、与您沟通及改善服务，我们不出售您的个人数据。" },
        { heading: "数据存储", text: "您的数据将安全存储，并仅在本政策所述目的所需的时间内保留。" },
        { heading: "Cookie", text: "我们仅使用维持会话所需的必要 Cookie，不使用第三方追踪 Cookie。" },
        { heading: "第三方服务", text: "我们可能使用第三方服务处理表单提交和统计分析，这些服务有各自的隐私政策。" },
        { heading: "您的权利", text: "您可随时联系我们，申请访问、更正或删除您的个人数据。" },
        { heading: "联系方式", text: "如有隐私相关问题，请发送邮件至 privacy@random-walk.co.jp 或访问 https://www.random-walk.co.jp。" },
      ],
    },
    images: {
      home: { query: "online community creators", fallback: "/images/home-fallback.svg" },
      product: { query: "payment interface", fallback: "/images/product-fallback.svg" },
      how: { query: "digital collaboration", fallback: "/images/how-fallback.svg" },
    },
  },
  ja: {
    brand: "Fiber Link",
    nav: {
      home: "ホーム",
      product: "プロダクト",
      howItWorks: "使い方",
      requestDemo: "デモ申請",
      source: "GitHub",
      privacy: "Privacy Policy",
      tos: "Terms of Service",
    },
    labels: {
      theme: "テーマ",
      light: "ライト",
      dark: "ダーク",
      system: "端末の設定",
      locale: "言語",
      comingSoon: "近日公開",
      requestDemoTitle: "デモ申請",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
    },
        hero: {
      eyebrow: "Launch early and stay in control",
      title: "Fiber Link",
      description:
        "リストに参加して、先に製品体験へ。デモ申請で先行アクセス枠を確保できます。",
      primary: "デモ申請",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "A payment layer for community platforms. Let admins activate creator rewards, let members tip in one click, and let creators track real earnings — without asking anyone to set up a crypto wallet.",
      viewOnGithub: "View on GitHub",
      joinText: "待機リストに参加",
      footerTag: "10,000名以上が待機中",
      updateTitle: "最新のアップデート",
      updateSubtitle: "お知らせとリリース情報。",
      joinHeading: "先行体験したいですか？",
      joinSubheading: "申請後1週間以内に対応します。",
      community: "コミュニティに参加",
      social: "SNSをフォロー",
      updates: [
        {
          date: "April 15, 2026",
          title: "ベータアクセス V2",
          desc: "4月15日にベータアクセスを公開予定。待機中ユーザーに優先招待を配布。",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
        {
          date: "April 2, 2026",
          title: "コミュニティ参加",
          desc: "コミュニティで進捗情報とサポートを共有。",
          author: "Hary, Co Founder",
          authorUrl: "#",
        },
        {
          date: "March 30, 2026",
          title: "SNSで更新",
          desc: "舞台裏の進捗を公開し、開発情報を定期共有。",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
      ],
      highlights: ["運営者向けに設計", "クリエイター中心の収益設計", "高速・低摩擦の支払い"],
      cardTitle: "Fiber Link でできること",
      cards: ["投稿者へ即時ティップ", "運営の複雑さを吸収", "収益履歴を一目で確認", "コミュニティ健全性の促進"],
    },

    product: {
      eyebrow: "製品",
      title: "コミュニティのための決済レイヤー。",
      intro: "既存のコミュニティ基盤に組み込めるため、全体体験を崩さずに収益化を開始できます。",
      cards: [
        { title: "運営者向け", description: "設定・レート・支払いルールを統合管理し、導入速度を高めます。" },
        { title: "クリエイター向け", description: "投稿や貢献に連動して支援が反映され、透明性ある収益管理が可能です。" },
        { title: "参加者向け", description: "コメント欄や投稿コンテキスト内で、違和感なく支援できます。" },
      ],
      visualTitle: "収益・支援ダッシュボード",
      visualCaption: "運営もクリエイターも把握しやすい表示を優先。",
    },
    useCases: {
      eyebrow: "ユースケース",
      title: "価値ある投稿に価値ある報酬を。",
      description: "知識共有、趣味コミュニティ、ファンエコノミーで継続的なインセンティブを実装。",
      cases: [
        { title: "クリエイターコミュニティ", description: "質の高い作品や投稿を継続的に支援できます。" },
        { title: "開発者フォーラム", description: "有用な回答や解決行動に対して迅速に感謝を送れます。" },
        { title: "学習コミュニティ", description: "専門知識の共有者に対する少額サポートが継続を促進します。" },
        { title: "ファンコミュニティ", description: "熱量の高い参加者が、自然に支援行動へ移行できます。" },
      ],
    },
    howItWorks: {
      eyebrow: "Fiber Network",
      title: "Fiber Network はコミュニティ向け決済チャネルです。",
      description: "Fiber Network はコミュニティの既存 UX を残したまま、貢献価値を決済フローへ変換する支払いチャネルを提供します。",
      steps: [
        { title: "接続", description: "管理者がプラットフォームに接続し、支援ルールを有効化。" },
        { title: "現場での支援", description: "投稿・スレッド内で即座に支援が行われます。" },
        { title: "残高と履歴", description: "収益は即時更新され、透明に蓄積されます。" },
        { title: "受け取りと管理", description: "運営側で受け取りや申請ルールを柔軟に管理します。" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "導入前の確認ポイント。",
      items: [
        { question: "ウォレット型プロダクトですか？", answer: "いいえ。コミュニティ決済レイヤーとして機能し、ウォレットを前面化しません。" },
        { question: "対象顧客は？", answer: "運営主導コミュニティ、クリエイター運営の収益化を検討しているチーム。" },
        { question: "一般ユーザーの負荷は？", answer: "UI はそのままに近い体験を維持し、決済理解はほぼ不要です。" },
      ],
      cta: "独自条件に合わせた導入を一緒に設計できます。",
    },
    requestDemo: {
      eyebrow: "デモ申請",
      title: "Fiber Link のライブデモへのアクセスを申請。",
      description: "demo.fiberlink.me で製品はプレビューできますが、セルフサインアップはまだ公開していません。申請内容を確認後、1週間以内にご連絡し、適切なチームには手動でデモアカウントを発行します。",
      panelTitle: "デモ申請の流れ",
      panelCopy: "一般的な startup の demo request と同じく、まずプレビューし、その後に申請・審査・案内を行います。",
      preview: "Demo",
      steps: ["まず", "チーム情報と利用目的を送信", "1週間以内に審査とご連絡", "承認されたチームへ手動でデモアカウントを発行"],
      form: {
        name: "お名前",
        email: "メールアドレス",
        org: "コミュニティ / 会社",
        role: "役割",
        notes: "用途 / 補足",
        submit: "デモを申請",
        submitting: "送信中...",
        helper: "入力内容をもとに優先度を判断し、1週間以内にご連絡します。",
        configMissing: "デモ申請の送信先がまだ設定されていません。公開前に受け取り先を設定してください。",
        error: "現在は申請を送信できません。しばらくしてから再試行してください。",
        placeholderName: "山田 太郎",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Knowledge Circle",
        placeholderNotes: "確認したいユースケースとコミュニティ運用条件を教えてください。",
        success: "申請を受け付けました。内容を確認し、1週間以内にご連絡します。",
      },
      roleOptions: ["創業者", "管理者", "コミュニティ運営", "クリエイター", "パートナー", "その他"],
    },
    footer: {
      text: "Fiber Link は貢献を実報酬へ変えるコミュニティ成長基盤です。",
      legal: "CKB Fiber 連携に最適化されたクリエイター収益レイヤー。",
    },
    tos: {
      title: "利用規約",
      lastUpdated: "最終更新：2026年4月",
      body: [
        { heading: "規約への同意", text: "Fiber Link を使用することにより、本利用規約に同意したものとみなされます。同意されない場合は、サービスのご利用をお控えください。" },
        { heading: "サービスの概要", text: "Fiber Link は CKB Fiber Network を基盤とし、コミュニティメンバーとクリエイター間のマイクロペイメントを可能にする決済インフラです。" },
        { heading: "ユーザーの責任", text: "アカウント認証情報の管理、およびアカウント上で発生するすべての活動についてはユーザー自身が責任を負います。" },
        { heading: "禁止行為", text: "違法目的、有害コンテンツの送信、またはサービスの完全性を損なう行為に Fiber Link を使用することは禁止されています。" },
        { heading: "知的財産", text: "Fiber Link 内のすべてのコンテンツ、商標、技術は Random Walk またはそのライセンサーの所有物であり、関連法律により保護されています。" },
        { heading: "責任の制限", text: "サービスは現状のまま提供されます。法律の許容する最大限の範囲において、間接的または結果的損害についての一切の責任を負いません。" },
        { heading: "規約の変更", text: "弊社はいつでも本規約を変更する権利を有します。サービスの継続利用は改訂後の規約への同意とみなされます。" },
        { heading: "お問い合わせ", text: "規約に関するご質問は legal@random-walk.co.jp までお問い合わせください。" },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新：2026年4月",
      body: [
        { heading: "収集する情報", text: "デモ申請やお問い合わせの際にご提供いただく氏名・メールアドレス・所属機関などの情報を収集します。" },
        { heading: "情報の利用目的", text: "収集した情報はデモ申請の処理、ご連絡、サービス改善に使用します。個人データの販売は行いません。" },
        { heading: "データの保存", text: "お客様のデータは安全に保管され、本ポリシーに記載された目的を達成するために必要な期間のみ保持されます。" },
        { heading: "Cookie", text: "セッション維持に必要な必須 Cookie のみを使用し、第三者追跡 Cookie は使用しません。" },
        { heading: "第三者サービス", text: "フォーム送信や分析のために第三者サービスを利用する場合があります。それらのサービスは独自のプライバシーポリシーを持っています。" },
        { heading: "お客様の権利", text: "いつでもご連絡いただくことで、個人データへのアクセス、修正、または削除を申請できます。" },
        { heading: "お問い合わせ", text: "プライバシーに関するご質問は privacy@random-walk.co.jp または https://www.random-walk.co.jp までご連絡ください。" },
      ],
    },
    images: {
      home: { query: "community app", fallback: "/images/home-fallback.svg" },
      product: { query: "financial dashboard", fallback: "/images/product-fallback.svg" },
      how: { query: "team building", fallback: "/images/how-fallback.svg" },
    },
  },
  ko: {
    brand: "Fiber Link",
    nav: {
      home: "홈",
      product: "제품",
      howItWorks: "작동 방식",
      requestDemo: "데모 요청",
      source: "GitHub",
      privacy: "Privacy Policy",
      tos: "Terms of Service",
    },
    labels: {
      theme: "테마",
      light: "라이트",
      dark: "다크",
      system: "시스템",
      locale: "언어",
      comingSoon: "오픈 예정",
      requestDemoTitle: "데모 요청",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
    },
        hero: {
      eyebrow: "기다림 없이 먼저 확인하세요",
      title: "Fiber Link",
      description:
        "대기열에 가입하고 먼저 제품을 체험하세요. 데모 신청을 통해 우선 체험권을 확보할 수 있습니다.",
      primary: "데모 신청",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "A payment layer for community platforms. Let admins activate creator rewards, let members tip in one click, and let creators track real earnings — without asking anyone to set up a crypto wallet.",
      viewOnGithub: "View on GitHub",
      joinText: "대기자 명단에 참여",
      footerTag: "10,000명 이상이 대기 중",
      updateTitle: "최근 소식",
      updateSubtitle: "공지사항과 릴리즈 소식.",
      joinHeading: "빠른 접근이 필요하세요?",
      joinSubheading: "신청 후 1주 이내로 검토 후 안내해 드립니다.",
      community: "커뮤니티 참여",
      social: "SNS 팔로우",
      updates: [
        {
          date: "April 15, 2026",
          title: "베타 접근 V2",
          desc: "4월 15일 베타 접근을 공개 예정입니다. 대기자 우선 안내를 제공합니다.",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
        {
          date: "April 2, 2026",
          title: "커뮤니티 참여",
          desc: "커뮤니티에 참여하여 업데이트와 답변을 받아보세요.",
          author: "Hary, Co Founder",
          authorUrl: "#",
        },
        {
          date: "March 30, 2026",
          title: "소셜 업데이트",
          desc: "진행 상황을 배경으로 공유하고 최신 정보를 전달합니다.",
          author: "Luke, Co Founder",
          authorUrl: "#",
        },
      ],
      highlights: ["운영자가 관리하기 쉽게", "크리에이터 중심 정산 구조", "즉시 처리 가능한 지급"],
      cardTitle: "Fiber Link가 가능한 일",
      cards: ["멤버가 한 번에 창작자를 응원", "운영자는 지갑/온체인 복잡성은 신경 쓸 필요 없음", "크리에이터 수익 변화를 즉시 표시", "참여를 촉진하는 보상 루프 형성"],
    },

    product: {
      eyebrow: "제품 소개",
      title: "커뮤니티용 결제 레이어, 지갑형 제품이 아님.",
      intro: "기존 커뮤니티 서비스 안에 통합되는 방식으로 빠르게 시행 가능합니다.",
      cards: [
        { title: "운영자용", description: "정책, 수수료, 지급 규칙을 통합 설정하고 운영 효율을 높입니다." },
        { title: "크리에이터용", description: "컨텐츠별로 지급이 반영되어 투명하고 꾸준한 수익을 확인할 수 있습니다." },
        { title: "멤버용", description: "콘텐츠 내에서 별도 전환 없이 자연스럽게 팁을 보낼 수 있습니다." },
      ],
      visualTitle: "보상 현황 대시보드",
      visualCaption: "운영·크리에이터 모두가 빠르게 읽을 수 있는 구조입니다.",
    },
    useCases: {
      eyebrow: "활용 사례",
      title: "기여가 금전적 보상으로 연결되는 곳.",
      description: "교육 커뮤니티, 팬덤, 개발자 포럼 등에서 멤버 기여를 바로 수익으로 연결할 수 있습니다.",
      cases: [
        { title: "크리에이터 커뮤니티", description: "좋은 콘텐츠와 기여를 실시간으로 보상해 참여를 늘립니다." },
        { title: "개발자 포럼", description: "유용한 답변과 지식 공유를 즉시 보상해 질 높은 정보가 유지됩니다." },
        { title: "학습 그룹", description: "강의자 및 답변자에 대한 지속적인 응원을 지원합니다." },
        { title: "팬 커뮤니티", description: "팬들이 창작자에게 지속적인 지지와 기여를 보낼 수 있습니다." },
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "Fiber Network 결제 채널 아키텍처.",
      description: "Fiber Network는 기존 커뮤니티 UI를 변경하지 않고, 창작자 보상/결제 채널을 연결하는 결제 레이어를 제공합니다.",
      steps: [
        { title: "커뮤니티 연결", description: "운영자가 통합 설정을 마치고 결제 규칙을 적용합니다." },
        { title: "콘텐츠 내 지지", description: "멤버는 컨텍스트 내에서 바로 팁/지원을 보낼 수 있습니다." },
        { title: "수익 잔액 반영", description: "창작자의 수익 변동이 즉시 표시됩니다." },
        { title: "출금 관리", description: "출금 정책은 운영자가 통제 가능한 타이밍으로 배치됩니다." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "도입 전 확인해야 할 항목들.",
      items: [
        { question: "지갑 상품인가요?", answer: "아닙니다. 커뮤니티 결제 레이어이며, 일반 멤버는 복잡한 지갑 조작이 필요 없습니다." },
        { question: "누가 주고객인가요?", answer: "커뮤니티 운영자와 창작자, 그리고 활성 멤버 관계를 강화하려는 팀입니다." },
        { question: "일반 사용자가 어려워하지 않나요?", answer: "UX는 커뮤니티 내 기존 동작과 유사하게 설계되어 진입장벽이 낮습니다." },
      ],
      cta: "독특한 정책이 있다면 함께 검토 후 데모 시나리오를 맞춰드릴 수 있습니다.",
    },
    requestDemo: {
      eyebrow: "데모 요청",
      title: "Fiber Link 라이브 데모 접근을 요청하세요.",
      description: "demo.fiberlink.me 에서 제품을 미리 볼 수 있지만, 셀프 회원가입은 아직 열려 있지 않습니다. 요청을 제출하면 저희가 사용 사례를 검토하고 1주일 이내에 연락드리며, 적합한 팀에는 데모 계정을 수동으로 개설합니다.",
      panelTitle: "데모 요청 절차",
      panelCopy: "일반적인 startup 데모 요청과 같은 흐름입니다. 먼저 미리 보고, 신청 후 팀이 검토하고 계정을 열어드립니다.",
      preview: "Demo",
      steps: ["먼저", "팀 정보와 사용 목적을 제출", "1주일 이내에 검토 후 연락", "승인된 팀에 수동으로 데모 계정 개설"],
      form: {
        name: "이름",
        email: "업무용 이메일",
        org: "커뮤니티 / 회사",
        role: "역할",
        notes: "사용 목적 / 메모",
        submit: "데모 신청",
        submitting: "제출 중...",
        helper: "입력한 정보는 우선순위 판단과 1주일 이내 후속 연락에 사용됩니다.",
        configMissing: "데모 요청 수집 엔드포인트가 아직 설정되지 않았습니다. 공개 전에 연결을 완료해 주세요.",
        error: "지금은 요청을 제출할 수 없습니다. 잠시 후 다시 시도해 주세요.",
        placeholderName: "홍길동",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Creator Circle",
        placeholderNotes: "운영 중인 커뮤니티와 검증하고 싶은 시나리오를 적어 주세요.",
        success: "요청이 접수되었습니다. 검토 후 1주일 이내에 연락드리겠습니다.",
        formSubtitle: "커뮤니티에 대해 알려주세요. 1주일 이내에 검토 후 연락드리겠습니다.",
      },
      roleOptions: ["설립자", "운영자", "모더레이터", "크리에이터", "파트너", "기타"],
    },
    footer: {
      text: "Fiber Link는 커뮤니티 기여를 창작자 수익으로 연결하는 결제 레이어입니다.",
      legal: "CKB Fiber 기반 커뮤니티 수익화 파트너십에 최적화됨.",
    },
    tos: {
      title: "服务条款",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [
        { heading: "接受条款", text: "使用 Fiber Link 即表示您同意遵守本服务条款。如不同意，请停止使用本服务。" },
        { heading: "服务说明", text: "Fiber Link 基于 CKB Fiber Network，为社区提供创作者打赏与小额支付基础设施。" },
        { heading: "用户责任", text: "您有责任保管好账号凭证，并对账号下的所有操作负责。" },
        { heading: "禁止行为", text: "不得将 Fiber Link 用于违法目的、传播有害内容或破坏服务完整性。" },
        { heading: "知识产权", text: "Fiber Link 内所有内容、商标及技术归 Random Walk 或其许可方所有，受相关法律保护。" },
        { heading: "责任限制", text: "服务按现状提供，在法律允许范围内，我们不承担任何间接或后果性损害责任。" },
        { heading: "条款变更", text: "我们保留随时修改本条款的权利，继续使用即视为接受修订后的条款。" },
        { heading: "联系方式", text: "如有疑问，请发送邮件至 legal@random-walk.co.jp。" },
      ],
    },
    privacy: {
      title: "隐私政策",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [
        { heading: "信息收集", text: "我们收集您在申请演示或联系我们时主动提供的信息，如姓名、邮箱及所属机构。" },
        { heading: "信息使用", text: "所收集信息用于处理演示申请、与您沟通及改善服务，我们不出售您的个人数据。" },
        { heading: "数据存储", text: "您的数据将安全存储，并仅在本政策所述目的所需的时间内保留。" },
        { heading: "Cookie", text: "我们仅使用维持会话所需的必要 Cookie，不使用第三方追踪 Cookie。" },
        { heading: "第三方服务", text: "我们可能使用第三方服务处理表单提交和统计分析，这些服务有各自的隐私政策。" },
        { heading: "您的权利", text: "您可随时联系我们，申请访问、更正或删除您的个人数据。" },
        { heading: "联系方式", text: "如有隐私相关问题，请发送邮件至 privacy@random-walk.co.jp 或访问 https://www.random-walk.co.jp。" },
      ],
    },
    tos: {
      title: "이용약관",
      lastUpdated: "최종 업데이트: 2026년 4월",
      body: [
        { heading: "약관 동의", text: "Fiber Link를 이용함으로써 본 이용약관에 동의한 것으로 간주됩니다. 동의하지 않으시면 서비스 이용을 중단해 주세요." },
        { heading: "서비스 설명", text: "Fiber Link는 CKB Fiber Network를 기반으로 커뮤니티 멤버와 크리에이터 간의 소액 결제를 가능하게 하는 커뮤니티 결제 인프라입니다." },
        { heading: "사용자 책임", text: "계정 자격 증명의 보안 유지 및 계정에서 발생하는 모든 활동에 대한 책임은 사용자에게 있습니다." },
        { heading: "금지 행위", text: "불법적인 목적, 유해한 콘텐츠 전송, 또는 서비스 무결성 침해를 위해 Fiber Link를 사용하는 것은 금지됩니다." },
        { heading: "지적 재산권", text: "Fiber Link 내 모든 콘텐츠, 상표 및 기술은 Random Walk 또는 그 라이선서의 소유이며 관련 법률에 의해 보호됩니다." },
        { heading: "책임의 제한", text: "서비스는 있는 그대로 제공됩니다. 법이 허용하는 최대한의 범위에서 간접적 손해에 대한 책임을 지지 않습니다." },
        { heading: "약관 변경", text: "당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 서비스를 계속 이용하면 개정된 약관에 동의한 것으로 간주됩니다." },
        { heading: "문의", text: "약관에 대한 문의는 legal@random-walk.co.jp로 연락해 주세요." },
      ],
    },
    privacy: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 4월",
      body: [
        { heading: "수집하는 정보", text: "데모 요청 또는 문의 시 제공하시는 이름, 이메일, 소속 기관 등의 정보를 수집합니다." },
        { heading: "정보 이용 목적", text: "수집된 정보는 데모 요청 처리, 커뮤니케이션, 서비스 개선에 사용됩니다. 개인 데이터는 판매하지 않습니다." },
        { heading: "데이터 보관", text: "귀하의 데이터는 안전하게 보관되며 본 방침에 명시된 목적을 달성하는 데 필요한 기간 동안만 보유됩니다." },
        { heading: "쿠키", text: "세션 유지를 위한 필수 쿠키만 사용하며, 제3자 추적 쿠키는 사용하지 않습니다." },
        { heading: "제3자 서비스", text: "양식 제출 및 분석을 위해 제3자 서비스를 사용할 수 있습니다. 이러한 서비스는 자체 개인정보 처리방침을 보유합니다." },
        { heading: "귀하의 권리", text: "언제든지 당사에 연락하여 개인 데이터에 대한 접근, 수정 또는 삭제를 요청할 수 있습니다." },
        { heading: "문의", text: "개인정보 관련 문의는 privacy@random-walk.co.jp 또는 https://www.random-walk.co.jp 로 연락해 주세요." },
      ],
    },
    images: {
      home: { query: "online community", fallback: "/images/home-fallback.svg" },
      product: { query: "analytics chart", fallback: "/images/product-fallback.svg" },
      how: { query: "teamwork workspace", fallback: "/images/how-fallback.svg" },
    },
  },
};

export const getTranslation = (locale, key) => {
  const parts = key.split(".");
  let value = translations[locale] || translations[defaultLocale];
  for (const part of parts) {
    value = value?.[part];
  }
  return value ?? null;
};
