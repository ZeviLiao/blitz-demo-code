import db from "./index"

const seed = async () => {
  console.log("開始建立種子資料...")

  // 創建任務 - 舊版本語法
  await db.task.create({
    data: {
      name: "學習 Blitz.js",
      description: "了解 Zero-API 架構",
      completed: false,
      priority: "高",
      dueDate: new Date("2025-08-15"),
    },
  })

  await db.task.create({
    data: {
      name: "建立 CRUD",
      description: "練習自動生成功能",
      completed: true,
      priority: "中",
      dueDate: new Date("2025-08-10"),
    },
  })

  await db.task.create({
    data: {
      name: "部署到生產環境",
      description: "使用 Docker 進行部署",
      completed: false,
      priority: "低",
      dueDate: new Date("2025-08-20"),
    },
  })

  // 創建專案
  await db.project.create({
    data: {
      name: "個人網站",
      description: "使用 Blitz.js 建立作品集",
      status: "進行中",
    },
  })

  await db.project.create({
    data: {
      name: "任務管理應用",
      description: "團隊協作工具",
      status: "規劃中",
    },
  })

  console.log("種子資料建立完成！")
}

export default seed
