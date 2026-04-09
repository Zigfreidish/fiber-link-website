export const supportedLocales = ["en", "zh", "ja", "ko"];
export const defaultLocale = "en";

export const navItems = [
  { slug: "", key: "home" },
  { slug: "product", key: "product" },
  { slug: "how-it-works", key: "howItWorks" },
  { slug: "faq", key: "faq" },
];

export const translations = {
  en: {
    brand: "Fiber Link",
    nav: {
      home: "Home",
      product: "Product",
      howItWorks: "How It Works",
      faq: "FAQ",
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
      headlinePrimary: "Payments",
      headlineSecondary: "Uncompromised",
      description:
        "Be first in line and experience the product before others. Apply for demo access and secure your slot.",
      primary: "Request Demo",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "Turn every act of community support into real creator earnings. Open, instant tipping for online communities, without running payment infrastructure.",
      viewOnGithub: "View on GitHub",
      learnMore: "Learn More",
      earlyAccess: "Get Early Access",
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
      title: "A payment layer for community platforms.",
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
      homeVisualTitle: "Creator rewards and payout workspace",
      homeVisualCaption:
        "A clearer payout-focused view showing support, distribution, and tracked earnings inside the community loop.",
      workflowVisualTitle: "Community payment workflow",
      workflowVisualCaption:
        "A clear view of how support actions move through Fiber Link into tracked payout and settlement.",
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
      diagram: {
        ariaLabel: "Fiber Link workflow system diagram",
        layers: [
          {
            eyebrow: "User interface",
            icon: "community",
            title: "Fiber Link Discourse Plugin",
            description:
              "Primary entry point, allowing community members to initiate tips and micropayments seamlessly.",
          },
          {
            eyebrow: "Backend service",
            icon: "service",
            title: "Fiber Link Service",
            description:
              "Core engine managing request logic, balance checks, and payment processing safeguards.",
          },
          {
            eyebrow: "Data / cache layer",
            icon: "cache",
            title: "Redis",
            description:
              "Shared nonce and replay cache that protects requests across service instances.",
          },
          {
            eyebrow: "Settlement layer / on-chain",
            icon: "settlement",
            title: "CKB Fiber Network",
            description:
              "Settlement path that finalizes micropayments through the CKB Fiber Network.",
          },
        ],
        steps: [
          {
            number: "1",
            title: "Transaction initiation",
            description:
              "A user triggers a tip or micropayment action through the Fiber Link Discourse Plugin inside the community forum.",
          },
          {
            number: "2",
            title: "Request processing & security check",
            description:
              "The Fiber Link Service receives the request and queries Redis to validate nonces and ensure it is not a replay.",
          },
          {
            number: "3",
            title: "Invariant & fund verification",
            description:
              "The service verifies sufficient funds and confirms the transaction preserves system balance rules.",
          },
          {
            number: "4",
            title: "Blockchain settlement",
            description:
              "Once validated, the request is forwarded to the Fiber Network Node for final settlement on CKB Fiber.",
          },
        ],
        admin: {
          eyebrow: "Management & oversight",
          icon: "admin",
          title: "Operation Admin Dashboard",
          description:
            "Dedicated operator surface for monitoring payment flows, setting rate limits, and reviewing critical activity.",
          stepNumber: "5",
          stepTitle: "Administrative oversight",
          stepDescription:
            "Operators use the dashboard in real time to monitor flow status, check limits, and retain an audit trail.",
        },
      },
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
      faq: "常见问题",
      requestDemo: "抢先体验",
      source: "GitHub",
      privacy: "隐私政策",
      tos: "服务条款",
    },
    labels: {
      theme: "主题",
      light: "浅色",
      dark: "深色",
      system: "跟随系统",
      locale: "语言",
      comingSoon: "即将推出",
      requestDemoTitle: "抢先体验",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    hero: {
      eyebrow: "Launch your community rewards early",
      title: "Fiber Link",
      headlinePrimary: "支付",
      headlineSecondary: "无所限制",
      description:
        "先加入等待列表，先于他人抢先体验产品。提交抢先体验申请后，我们会尽快完成审核并安排开通。",
      primary: "抢先体验",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "让社区的每一次支持，都沉淀为创作者的真实收益。面向在线社区的开放即时打赏，一键接入，即刻启用。",
      viewOnGithub: "查看 GitHub",
      learnMore: "了解更多",
      earlyAccess: "抢先体验",
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
      title: "面向社区平台的支付层。",
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
      homeVisualTitle: "创作者激励与收益面板",
      homeVisualCaption: "用更明确的激励场景，说明创作者支持、分发与收益沉淀如何在社区内形成闭环。",
      workflowVisualTitle: "社区支付路径流程图",
      workflowVisualCaption: "用清晰的流程视图展示支持动作如何进入结算与提现。",
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
      diagram: {
        ariaLabel: "Fiber Link 工作流系统图",
        layers: [
          {
            eyebrow: "用户界面",
            icon: "community",
            title: "Fiber Link Discourse 插件",
            description: "作为社区成员发起打赏与小额支付的前端入口。",
          },
          {
            eyebrow: "后端服务",
            icon: "service",
            title: "Fiber Link 服务",
            description: "负责请求逻辑、余额约束与支付处理保护。",
          },
          {
            eyebrow: "数据 / 缓存层",
            icon: "cache",
            title: "Redis",
            description: "作为共享 nonce 与重放保护缓存，保障多实例请求安全。",
          },
          {
            eyebrow: "结算层 / 链上",
            icon: "settlement",
            title: "CKB Fiber Network",
            description: "负责最终的小额支付结算与链上确认。",
          },
        ],
        steps: [
          {
            number: "1",
            title: "交易发起",
            description: "成员在社区内通过 Fiber Link 插件直接发起打赏或小额支付动作。",
          },
          {
            number: "2",
            title: "请求处理与安全检查",
            description: "Fiber Link 服务接收请求后，会先查询 Redis 校验 nonce 并确认不是重放请求。",
          },
          {
            number: "3",
            title: "约束与余额校验",
            description: "系统验证用户余额是否充足，并确认交易仍满足账本与系统约束。",
          },
          {
            number: "4",
            title: "区块链结算",
            description: "验证通过后，请求会被转发到 Fiber Network Node，在 CKB Fiber 上完成最终结算。",
          },
        ],
        admin: {
          eyebrow: "管理与监督",
          icon: "admin",
          title: "独立管理员后台",
          description: "供运营侧持续监控支付流转、设定限额并查看关键状态。",
          stepNumber: "5",
          stepTitle: "管理侧监督",
          stepDescription: "管理员通过后台实时观察流转状态、检查限额，并保留完整审计线索。",
        },
      },
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
      eyebrow: "抢先体验",
      title: "申请 Fiber Link 抢先体验资格。",
      description: "你可以先访问 demo.fiberlink.me 预览产品，但当前仍为邀请制体验。提交申请后，我们会评估你的使用场景，并在一周内联系合适的团队开通体验权限。",
      panelTitle: "抢先体验申请流程",
      panelCopy: "当前采用邀请制体验流程：先预览产品，再提交申请，由团队审核后人工开通。",
      preview: "Demo",
      steps: ["先在", "提交团队信息与预期使用场景", "我们会在一周内完成审核并联系你", "通过审核的团队将收到手动开通的抢先体验权限"],
      form: {
        name: "姓名",
        email: "工作邮箱",
        org: "公司 / 社区",
        role: "角色",
        notes: "使用场景 / 备注",
        submit: "抢先体验",
        submitting: "提交中...",
        helper: "我们会基于这些信息判断优先级，并在一周内与你联系。",
        configMissing: "抢先体验申请入口尚未配置接收端点，请先完成接入配置后再开放表单。",
        error: "当前无法提交抢先体验申请，请稍后再试。",
        placeholderName: "你的名字",
        placeholderEmail: "you@company.com",
        placeholderOrg: "产品社区",
        placeholderNotes: "请说明你的社区类型、希望验证的场景，以及最关心的指标。",
        success: "申请已收到。我们会评估你的场景，并在一周内联系你安排抢先体验。",
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
        { heading: "条款适用", text: "访问、浏览或使用 Fiber Link，即表示您已阅读、理解并同意受本服务条款约束；如您代表法人、组织或其他实体使用本服务，即表示您有权代表该主体接受本条款。" },
        { heading: "服务性质", text: "Fiber Link 是基于 CKB Fiber Network 的社区支付基础设施服务，用于支持创作者激励、小额支付及相关运营能力。具体功能、开放范围与可用性以我们实际提供的服务版本为准。" },
        { heading: "账户与访问安全", text: "您应妥善保管账户、验证码、密钥及其他访问凭证，并对通过您的账户或设备发起的操作承担责任。如发现任何未经授权的使用或安全事件，请及时通知我们。" },
        { heading: "合规使用", text: "您不得利用本服务从事任何违法违规、欺诈、侵权、洗钱、传播有害内容、干扰系统稳定性或损害他人合法权益的行为。" },
        { heading: "知识产权声明", text: "Fiber Link 相关的软件、界面、商标、文档、代码及其他内容的知识产权归 Random Walk 或其许可方所有。未经书面许可，您不得复制、修改、传播、反向工程或用于超出授权范围的用途。" },
        { heading: "免责声明与责任限制", text: "在适用法律允许的最大范围内，本服务按“现状”和“可用”基础提供。对于因服务中断、延迟、第三方依赖、数据丢失，或任何间接、附带、特殊及后果性损害所产生的责任，我们不承担责任。" },
        { heading: "条款更新", text: "我们可根据业务、合规或产品调整需要更新本条款。更新版本发布后即生效；您继续使用本服务的，视为接受更新后的条款。" },
        { heading: "联系方式", text: "如您对本服务条款有任何疑问，请发送邮件至 legal@random-walk.co.jp。" },
      ],
    },
    privacy: {
      title: "隐私政策",
      lastUpdated: "最近更新：2026 年 4 月",
      body: [
        { heading: "适用范围", text: "本隐私政策适用于您访问 Fiber Link 网站、提交抢先体验申请、与我们沟通，或以其他方式使用相关服务时，我们对个人信息的收集、使用、存储与保护。" },
        { heading: "收集的信息", text: "我们可能收集您主动提供的信息，包括姓名、工作邮箱、所属机构、职位、使用场景说明及与沟通相关的其他信息。" },
        { heading: "处理目的", text: "我们收集和处理上述信息，主要用于评估抢先体验申请、回复咨询、提供服务支持、改进产品体验、进行运营分析，以及履行必要的合规与安全义务。" },
        { heading: "保存与保护", text: "我们会采取合理的技术与管理措施保护您的信息安全，并仅在实现本政策所述目的所必需的期限内保存相关数据，或在法律法规要求的期限内保存。" },
        { heading: "Cookie 与必要技术", text: "我们可能使用维持站点正常运行、会话管理与基础性能分析所必需的 Cookie 或类似技术，不会在未经说明的情况下使用与本服务无关的跟踪技术。" },
        { heading: "第三方处理方", text: "为支持表单提交、托管、分析或通信等功能，我们可能使用第三方服务提供商。相关提供商仅在实现前述目的所必需的范围内处理信息，并受其各自条款与隐私政策约束。" },
        { heading: "您的权利", text: "在适用法律允许的范围内，您可以就您的个人信息提出访问、更正、删除或处理限制等请求。我们将在核实身份后，于合理期限内作出回应。" },
        { heading: "联系方式", text: "如您对本隐私政策或个人信息处理事宜有任何疑问，请发送邮件至 privacy@random-walk.co.jp，或访问 https://www.random-walk.co.jp。" },
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
      faq: "よくある質問",
      requestDemo: "先行体験",
      source: "GitHub",
      privacy: "プライバシーポリシー",
      tos: "利用規約",
    },
    labels: {
      theme: "テーマ",
      light: "ライト",
      dark: "ダーク",
      system: "端末の設定",
      locale: "言語",
      comingSoon: "近日公開",
      requestDemoTitle: "先行体験",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
    },
    hero: {
      eyebrow: "Launch early and stay in control",
      title: "Fiber Link",
      headlinePrimary: "決済",
      headlineSecondary: "制限なく",
      description:
        "ウェイトリストに参加し、誰よりも早く製品を体験できます。先行体験を申請いただくと、審査後にご案内します。",
      primary: "先行体験",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "コミュニティの一つひとつの支援を、クリエイターの確かな収益へ。オンラインコミュニティのためのオープンな即時投げ銭を、ワンクリックで導入し、すぐに始められます。",
      viewOnGithub: "View on GitHub",
      learnMore: "詳しく見る",
      earlyAccess: "先行アクセス",
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
      title: "コミュニティプラットフォームのための決済レイヤー。",
      intro: "既存のコミュニティ基盤に組み込めるため、全体体験を崩さずに収益化を開始できます。",
      cards: [
        { title: "運営者向け", description: "設定・レート・支払いルールを統合管理し、導入速度を高めます。" },
        { title: "クリエイター向け", description: "投稿や貢献に連動して支援が反映され、透明性ある収益管理が可能です。" },
        { title: "参加者向け", description: "コメント欄や投稿コンテキスト内で、違和感なく支援できます。" },
      ],
      visualTitle: "収益・支援ダッシュボード",
      visualCaption: "運営もクリエイターも把握しやすい表示を優先。",
      homeVisualTitle: "クリエイター報酬と収益パネル",
      homeVisualCaption: "支援、分配、収益の蓄積がコミュニティ内でどう循環するかを、より明確に示します。",
      workflowVisualTitle: "コミュニティ決済フロー",
      workflowVisualCaption: "支援アクションが Fiber Link を通って追跡可能な精算へ進む流れを示します。",
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
      diagram: {
        ariaLabel: "Fiber Link ワークフロー図",
        layers: [
          {
            eyebrow: "ユーザーインターフェース",
            icon: "community",
            title: "Fiber Link Discourse プラグイン",
            description: "コミュニティ内でチップや少額決済を起動するフロント側の入口です。",
          },
          {
            eyebrow: "バックエンドサービス",
            icon: "service",
            title: "Fiber Link サービス",
            description: "リクエスト処理、残高制約、決済保護ロジックを担う中核サービスです。",
          },
          {
            eyebrow: "データ / キャッシュ層",
            icon: "cache",
            title: "Redis",
            description: "Nonce 共有とリプレイ防止のためのキャッシュとして機能します。",
          },
          {
            eyebrow: "精算層 / オンチェーン",
            icon: "settlement",
            title: "CKB Fiber Network",
            description: "最終的な少額決済の精算を CKB Fiber 上で完了させます。",
          },
        ],
        steps: [
          {
            number: "1",
            title: "トランザクション開始",
            description: "コミュニティ内でユーザーが Fiber Link プラグイン経由でチップ操作を開始します。",
          },
          {
            number: "2",
            title: "リクエスト処理とセキュリティ確認",
            description: "Fiber Link サービスが Redis を参照し、nonce とリプレイ可否を確認します。",
          },
          {
            number: "3",
            title: "残高と不変条件の検証",
            description: "十分な残高があることと、トランザクションがシステム制約を保つことを確認します。",
          },
          {
            number: "4",
            title: "ブロックチェーン精算",
            description: "検証後、Fiber Network Node が CKB Fiber 上で最終精算を行います。",
          },
        ],
        admin: {
          eyebrow: "管理と監督",
          icon: "admin",
          title: "運用管理ダッシュボード",
          description: "運営側が決済フローを監視し、上限設定や重要状態を把握するための管理面です。",
          stepNumber: "5",
          stepTitle: "管理側オーバーサイト",
          stepDescription: "管理者はダッシュボード上で状態をリアルタイムに確認し、制限値と監査履歴を維持します。",
        },
      },
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
      eyebrow: "先行体験",
      title: "Fiber Link の先行体験を申請。",
      description: "demo.fiberlink.me で製品をプレビューできますが、現在は招待制での提供です。申請内容を確認のうえ、適切なチームには1週間以内を目安にご連絡し、体験権限を手動で付与します。",
      panelTitle: "先行体験の申請フロー",
      panelCopy: "現在は招待制の体験フローを採用しています。まず製品を確認し、その後に申請いただいた内容を審査してご案内します。",
      preview: "Demo",
      steps: ["まず", "チーム情報と利用目的を送信", "1週間以内に審査とご連絡", "承認されたチームへ手動で先行体験権限を付与"],
      form: {
        name: "お名前",
        email: "メールアドレス",
        org: "コミュニティ / 会社",
        role: "役割",
        notes: "用途 / 補足",
        submit: "先行体験",
        submitting: "送信中...",
        helper: "入力内容をもとに優先度を判断し、1週間以内にご連絡します。",
        configMissing: "先行体験申請の送信先がまだ設定されていません。公開前に受け取り先を設定してください。",
        error: "現在は先行体験申請を送信できません。しばらくしてから再試行してください。",
        placeholderName: "山田 太郎",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Knowledge Circle",
        placeholderNotes: "確認したいユースケースとコミュニティ運用条件を教えてください。",
        success: "申請を受け付けました。内容を確認のうえ、1週間以内に先行体験のご案内を差し上げます。",
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
        { heading: "規約の適用", text: "Fiber Link へアクセス、閲覧または利用することにより、お客様は本利用規約を読み、理解し、これに拘束されることに同意したものとみなされます。法人その他の組織を代表して利用する場合は、当該主体を代表して本規約に同意する権限を有することを表明するものとします。" },
        { heading: "サービスの性質", text: "Fiber Link は CKB Fiber Network を基盤とするコミュニティ向け決済インフラであり、クリエイター支援、少額決済および関連する運営機能を提供します。具体的な機能、提供範囲および可用性は、当社が実際に提供するサービス内容に従います。" },
        { heading: "アカウントとアクセス管理", text: "お客様は、アカウント、認証コード、鍵その他のアクセス情報を適切に管理し、お客様のアカウントまたは端末から行われた操作について責任を負うものとします。不正利用またはセキュリティ上の問題を認識した場合は、速やかに当社へご連絡ください。" },
        { heading: "適法利用", text: "本サービスを、法令違反、不正行為、権利侵害、マネーロンダリング、有害コンテンツの配信、システムの安定性を損なう行為、または第三者の正当な利益を害する目的で利用してはなりません。" },
        { heading: "知的財産権", text: "Fiber Link に関連するソフトウェア、画面、商標、文書、コードおよびその他一切のコンテンツに関する知的財産権は、Random Walk またはそのライセンサーに帰属します。書面による許可なく、複製、改変、配布、リバースエンジニアリングその他許諾範囲を超える利用はできません。" },
        { heading: "免責および責任制限", text: "適用法令で認められる最大限の範囲で、本サービスは「現状有姿」かつ「提供可能な範囲」で提供されます。サービス中断、遅延、第三者サービスへの依存、データ消失、または間接的・付随的・特別・結果的損害について、当社は責任を負いません。" },
        { heading: "規約の更新", text: "当社は、事業上、法令上または製品上の必要に応じて本規約を更新することがあります。更新後の規約は公開時点で効力を生じ、お客様が引き続き本サービスを利用した場合、更新後の内容に同意したものとみなされます。" },
        { heading: "お問い合わせ", text: "本利用規約に関するお問い合わせは、legal@random-walk.co.jp までご連絡ください。" },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新：2026年4月",
      body: [
        { heading: "適用範囲", text: "本プライバシーポリシーは、Fiber Link ウェブサイトへのアクセス、先行体験申請、お問い合わせ、その他関連サービスの利用に際して、当社が個人情報をどのように収集、利用、保存および保護するかを定めるものです。" },
        { heading: "収集する情報", text: "当社は、お客様が任意で提供する氏名、業務用メールアドレス、所属組織、役職、利用予定のユースケース、ならびにご連絡内容に含まれるその他の情報を収集する場合があります。" },
        { heading: "利用目的", text: "収集した情報は、先行体験申請の審査、問い合わせ対応、サポート提供、製品改善、運営分析、ならびに必要な法令遵守およびセキュリティ対応のために利用します。" },
        { heading: "保存と保護", text: "当社は、お客様の情報を保護するために合理的な技術的・組織的措置を講じ、本ポリシーに記載した目的の達成に必要な期間、または法令で要求される期間に限って保存します。" },
        { heading: "Cookie と必要技術", text: "当社は、サイトの正常な動作、セッション管理および基礎的な性能分析に必要な Cookie または類似技術を使用する場合があります。事前の説明なく、本サービスと無関係な追跡技術を使用することはありません。" },
        { heading: "第三者処理事業者", text: "フォーム送信、ホスティング、分析、通信等の機能を支援するため、当社は第三者サービス提供者を利用する場合があります。これらの提供者は、前記目的の達成に必要な範囲でのみ情報を処理し、それぞれの利用条件およびプライバシーポリシーに従います。" },
        { heading: "お客様の権利", text: "適用法令の範囲内で、お客様はご自身の個人情報について、アクセス、訂正、削除または処理の制限を求めることができます。当社は本人確認後、合理的な期間内に対応します。" },
        { heading: "お問い合わせ", text: "本プライバシーポリシーまたは個人情報の取扱いに関するお問い合わせは、privacy@random-walk.co.jp または https://www.random-walk.co.jp までご連絡ください。" },
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
      faq: "자주 묻는 질문",
      requestDemo: "얼리 액세스",
      source: "GitHub",
      privacy: "개인정보 처리방침",
      tos: "이용약관",
    },
    labels: {
      theme: "테마",
      light: "라이트",
      dark: "다크",
      system: "시스템",
      locale: "언어",
      comingSoon: "오픈 예정",
      requestDemoTitle: "얼리 액세스",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
    },
    hero: {
      eyebrow: "기다림 없이 먼저 확인하세요",
      title: "Fiber Link",
      headlinePrimary: "결제",
      headlineSecondary: "제한 없이",
      description:
        "대기열에 참여하면 누구보다 먼저 제품을 체험할 수 있습니다. 얼리 액세스를 신청하시면 검토 후 안내해 드립니다.",
      primary: "얼리 액세스",
      secondary: "hello@studiox@gmail.com",
      contact: "hello@studiox@gmail.com",
      tagline: "커뮤니티의 모든 지지가 창작자의 실질적인 수익으로 이어집니다. 온라인 커뮤니티를 위한 개방형 즉시 후원을 원클릭으로 도입하고, 바로 시작할 수 있습니다.",
      viewOnGithub: "View on GitHub",
      learnMore: "자세히 보기",
      earlyAccess: "얼리 액세스 신청",
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
      title: "커뮤니티 플랫폼을 위한 결제 레이어.",
      intro: "기존 커뮤니티 서비스 안에 통합되는 방식으로 빠르게 시행 가능합니다.",
      cards: [
        { title: "운영자용", description: "정책, 수수료, 지급 규칙을 통합 설정하고 운영 효율을 높입니다." },
        { title: "크리에이터용", description: "컨텐츠별로 지급이 반영되어 투명하고 꾸준한 수익을 확인할 수 있습니다." },
        { title: "멤버용", description: "콘텐츠 내에서 별도 전환 없이 자연스럽게 팁을 보낼 수 있습니다." },
      ],
      visualTitle: "보상 현황 대시보드",
      visualCaption: "운영·크리에이터 모두가 빠르게 읽을 수 있는 구조입니다.",
      homeVisualTitle: "크리에이터 보상 및 수익 패널",
      homeVisualCaption: "후원, 분배, 수익 축적이 커뮤니티 안에서 어떻게 선명한 흐름을 이루는지 보여줍니다.",
      workflowVisualTitle: "커뮤니티 결제 흐름도",
      workflowVisualCaption: "지원 액션이 Fiber Link를 거쳐 추적 가능한 정산 단계로 이어지는 경로를 보여줍니다.",
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
      diagram: {
        ariaLabel: "Fiber Link 워크플로 시스템 다이어그램",
        layers: [
          {
            eyebrow: "사용자 인터페이스",
            icon: "community",
            title: "Fiber Link Discourse 플러그인",
            description: "커뮤니티 안에서 팁과 소액 결제를 시작하는 프론트 엔트리 포인트입니다.",
          },
          {
            eyebrow: "백엔드 서비스",
            icon: "service",
            title: "Fiber Link 서비스",
            description: "요청 처리, 잔액 제약, 결제 보호 로직을 담당하는 핵심 서비스입니다.",
          },
          {
            eyebrow: "데이터 / 캐시 레이어",
            icon: "cache",
            title: "Redis",
            description: "nonce 공유와 리플레이 방지를 위한 공용 캐시로 동작합니다.",
          },
          {
            eyebrow: "정산 레이어 / 온체인",
            icon: "settlement",
            title: "CKB Fiber Network",
            description: "최종 소액 결제를 CKB Fiber에서 마무리하는 정산 경로입니다.",
          },
        ],
        steps: [
          {
            number: "1",
            title: "거래 시작",
            description: "멤버가 커뮤니티 안에서 Fiber Link 플러그인을 통해 팁 또는 소액 결제를 시작합니다.",
          },
          {
            number: "2",
            title: "요청 처리 및 보안 확인",
            description: "Fiber Link 서비스는 Redis를 조회해 nonce와 리플레이 여부를 먼저 검증합니다.",
          },
          {
            number: "3",
            title: "잔액 및 제약 조건 검증",
            description: "사용자 잔액이 충분한지, 그리고 거래가 시스템 제약을 유지하는지 확인합니다.",
          },
          {
            number: "4",
            title: "블록체인 정산",
            description: "검증 후 Fiber Network Node가 CKB Fiber에서 최종 정산을 수행합니다.",
          },
        ],
        admin: {
          eyebrow: "관리 및 감독",
          icon: "admin",
          title: "운영 관리자 대시보드",
          description: "운영 측이 결제 흐름을 모니터링하고 한도와 핵심 상태를 관리하는 전용 화면입니다.",
          stepNumber: "5",
          stepTitle: "관리 측 감독",
          stepDescription: "관리자는 대시보드에서 상태를 실시간으로 확인하고 제한값과 감사 이력을 유지합니다.",
        },
      },
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
      eyebrow: "얼리 액세스",
      title: "Fiber Link 얼리 액세스를 신청하세요.",
      description: "demo.fiberlink.me 에서 제품을 미리 살펴볼 수 있지만, 현재는 초대 기반으로만 제공하고 있습니다. 제출된 내용을 검토한 뒤 적합한 팀에는 1주일 이내를 목표로 연락드리고, 체험 권한을 수동으로 부여합니다.",
      panelTitle: "얼리 액세스 신청 절차",
      panelCopy: "현재는 초대 기반 체험 절차를 운영하고 있습니다. 먼저 제품을 확인한 뒤 신청해 주시면, 팀이 검토 후 안내해 드립니다.",
      preview: "Demo",
      steps: ["먼저", "팀 정보와 사용 목적을 제출", "1주일 이내에 검토 후 연락", "승인된 팀에 수동으로 얼리 액세스 권한 부여"],
      form: {
        name: "이름",
        email: "업무용 이메일",
        org: "커뮤니티 / 회사",
        role: "역할",
        notes: "사용 목적 / 메모",
        submit: "얼리 액세스",
        submitting: "제출 중...",
        helper: "입력한 정보는 우선순위 판단과 1주일 이내 후속 연락에 사용됩니다.",
        configMissing: "얼리 액세스 신청 수집 엔드포인트가 아직 설정되지 않았습니다. 공개 전에 연결을 완료해 주세요.",
        error: "지금은 얼리 액세스 신청을 제출할 수 없습니다. 잠시 후 다시 시도해 주세요.",
        placeholderName: "홍길동",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Creator Circle",
        placeholderNotes: "운영 중인 커뮤니티와 검증하고 싶은 시나리오를 적어 주세요.",
        success: "신청이 접수되었습니다. 검토 후 1주일 이내에 얼리 액세스 안내를 드리겠습니다.",
        formSubtitle: "커뮤니티에 대해 알려주세요. 1주일 이내에 검토 후 연락드리겠습니다.",
      },
      roleOptions: ["설립자", "운영자", "모더레이터", "크리에이터", "파트너", "기타"],
    },
    footer: {
      text: "Fiber Link는 커뮤니티 기여를 창작자 수익으로 연결하는 결제 레이어입니다.",
      legal: "CKB Fiber 기반 커뮤니티 수익화 파트너십에 최적화됨.",
    },
    tos: {
      title: "이용약관",
      lastUpdated: "최종 업데이트: 2026년 4월",
      body: [
        { heading: "약관의 적용", text: "Fiber Link에 접속하거나 이를 열람 또는 이용하는 경우, 귀하는 본 이용약관을 읽고 이해했으며 이에 구속되는 데 동의한 것으로 간주됩니다. 법인이나 기타 조직을 대표하여 이용하는 경우, 해당 주체를 대신해 본 약관에 동의할 권한이 있음을 진술하는 것으로 봅니다." },
        { heading: "서비스의 성격", text: "Fiber Link는 CKB Fiber Network를 기반으로 하는 커뮤니티 결제 인프라로, 크리에이터 지원, 소액 결제 및 관련 운영 기능을 제공합니다. 구체적인 기능, 제공 범위 및 이용 가능 여부는 당사가 실제로 제공하는 서비스 버전에 따릅니다." },
        { heading: "계정 및 접근 보안", text: "귀하는 계정, 인증 코드, 키 및 기타 접근 정보를 적절히 관리해야 하며, 귀하의 계정 또는 기기에서 이루어진 행위에 대해 책임을 부담합니다. 무단 사용이나 보안 문제를 인지한 경우 즉시 당사에 알려 주시기 바랍니다." },
        { heading: "적법한 이용", text: "귀하는 본 서비스를 법령 위반, 사기, 권리 침해, 자금 세탁, 유해 콘텐츠 배포, 시스템 안정성 저해 또는 제3자의 정당한 이익을 해치는 목적으로 이용해서는 안 됩니다." },
        { heading: "지적 재산권", text: "Fiber Link와 관련된 소프트웨어, 화면, 상표, 문서, 코드 및 기타 모든 콘텐츠에 대한 지적 재산권은 Random Walk 또는 그 라이선스 제공자에게 귀속됩니다. 서면 허가 없이 복제, 수정, 배포, 리버스 엔지니어링 또는 허용 범위를 벗어난 이용을 할 수 없습니다." },
        { heading: "면책 및 책임 제한", text: "관련 법령이 허용하는 최대 범위에서 본 서비스는 '있는 그대로' 그리고 '제공 가능한 범위 내에서' 제공됩니다. 서비스 중단, 지연, 제3자 서비스 의존, 데이터 손실 또는 간접적·부수적·특별·결과적 손해에 대해 당사는 책임을 지지 않습니다." },
        { heading: "약관의 변경", text: "당사는 사업, 규제 또는 제품 운영상 필요에 따라 본 약관을 변경할 수 있습니다. 변경된 약관은 게시 시점부터 효력이 발생하며, 귀하가 계속해서 본 서비스를 이용하는 경우 변경된 내용에 동의한 것으로 간주됩니다." },
        { heading: "문의", text: "본 이용약관에 관한 문의는 legal@random-walk.co.jp로 연락해 주세요." },
      ],
    },
    privacy: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 4월",
      body: [
        { heading: "적용 범위", text: "본 개인정보 처리방침은 Fiber Link 웹사이트 방문, 얼리 액세스 신청, 문의 또는 기타 관련 서비스 이용 과정에서 당사가 개인정보를 수집, 이용, 보관 및 보호하는 방식을 설명합니다." },
        { heading: "수집하는 정보", text: "당사는 귀하가 자발적으로 제공하는 이름, 업무용 이메일, 소속 조직, 직책, 검토를 원하는 사용 사례 및 커뮤니케이션 과정에서 제공되는 기타 정보를 수집할 수 있습니다." },
        { heading: "처리 목적", text: "수집된 정보는 얼리 액세스 신청 검토, 문의 대응, 서비스 지원 제공, 제품 개선, 운영 분석 및 필요한 규제 준수와 보안 대응을 위해 처리됩니다." },
        { heading: "보관 및 보호", text: "당사는 개인정보 보호를 위해 합리적인 기술적·관리적 조치를 적용하며, 본 방침의 목적 달성에 필요한 기간 또는 관련 법령이 요구하는 기간 동안에만 정보를 보관합니다." },
        { heading: "쿠키 및 필수 기술", text: "당사는 사이트의 정상 동작, 세션 관리 및 기본 성능 분석에 필요한 쿠키 또는 유사 기술을 사용할 수 있습니다. 별도의 안내 없이 본 서비스와 무관한 추적 기술을 사용하지 않습니다." },
        { heading: "제3자 처리업체", text: "폼 제출, 호스팅, 분석 또는 커뮤니케이션 기능을 지원하기 위해 제3자 서비스 제공업체를 이용할 수 있습니다. 이들 제공업체는 앞서 언급한 목적을 달성하는 데 필요한 범위 내에서만 정보를 처리하며, 각자의 약관 및 개인정보 처리방침을 따릅니다." },
        { heading: "귀하의 권리", text: "적용 법령이 허용하는 범위 내에서 귀하는 본인 개인정보에 대한 열람, 정정, 삭제 또는 처리 제한을 요청할 수 있습니다. 당사는 본인 확인 후 합리적인 기간 내에 응답합니다." },
        { heading: "문의", text: "본 개인정보 처리방침 또는 개인정보 처리에 관한 문의는 privacy@random-walk.co.jp 또는 https://www.random-walk.co.jp 로 연락해 주세요." },
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
