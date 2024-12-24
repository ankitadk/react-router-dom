const Users = [
  {
    name: "Ankita",
    profession: "PHP Developer",
    image:
      "https://media.istockphoto.com/id/1399324249/photo/woman-working-late-on-computer-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=dsZIzJBoZFzhtv3Hhqw5jaH-RKrGZSfsALhGnQm6fIU=",
    followers: 1200,
    following: 340,
    username: "ankita_dev",
    description:
      "Loves coding and problem-solving with PHP. Passionate about building efficient web apps.",
    posts: [
      {
        id: "post_001",
        image:
          "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWRzJTIwcmVjaXBlfGVufDB8MHwwfHx8MA%3D%3D",
        caption: "PHP is love ❤️ #developerlife #coding",
        likes: 340,
        posted: "2024-09-10",
      },
      {
        id: "post_002",
        image:
          "https://media.istockphoto.com/id/1330949476/photo/bulgur-wheat-salad-with-vegetables-on-white-background-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=GhkylR8FVT0IL19iqIrhXTIA6xuYlIWKiw-0Az_mqNY=",
        caption: "Working late, but loving the process 💻🌙",
        likes: 425,
        posted: "2024-09-20",
      },
      {
        id: "post_003",
        image:
          "https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=uEgOuea40C-cXmbM17DSd7M75hgTATBE-PUAMh2Jkr4=",
        caption: "Another bug squashed 🐞 #debugging #devlife",
        likes: 500,
        posted: "2024-10-05",
      },
      {
        id: "post_004",
        image:
          "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=PDAOJZowRgcFpLORXCV5p9Yt4wuOlxpYkxOUk5M4koo=",
        caption: "PHP is love ❤️ #developerlife #coding",
        likes: 340,
        posted: "2024-09-10",
      },
      {
        id: "post_005",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGFkcyUyMHJlY2lwZXxlbnwwfDB8MHx8fDA%3D",
        caption: "Working late, but loving the process 💻🌙",
        likes: 425,
        posted: "2024-09-20",
      },
      {
        id: "post_006",
        image:
          "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWRzJTIwcmVjaXBlfGVufDB8MHwwfHx8MA%3D%3D",
        caption: "Another bug squashed 🐞 #debugging #devlife",
        likes: 500,
        posted: "2024-10-05",
      },
    ],
  },
  {
    name: "Rohan",
    profession: "Data Scientist",
    image:
      "https://media.istockphoto.com/id/953584274/photo/businessman-on-the-phone-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=WVbCKlT1w7PofMWPvjWS6yoqAet-49_MuWRkHAHbqJU=",
    followers: 980,
    following: 210,
    username: "rohan_ds",
    description:
      "Turning data into insights. Expert in machine learning and statistical modeling.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVjb3J8ZW58MHwwfDB8fHww",
        caption: "Training the model, let's see the results! 📊",
        likes: 610,
        posted: "2024-10-01",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3J8ZW58MHwwfDB8fHww",
        caption: "Training the model, let's see the results! 📊",
        likes: 610,
        posted: "2024-10-01",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlY29yfGVufDB8MHwwfHx8MA%3D%3D",
        caption: "Data visualization magic ✨ #dataviz",
        likes: 545,
        posted: "2024-09-22",
      },
      {
        id: "post_010",
        image:
          "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVjb3J8ZW58MHwwfDB8fHww",
        caption: "Data visualization magic ✨ #dataviz",
        likes: 545,
        posted: "2024-09-22",
      },
      {
        id: "post_011",
        image:
          "https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlY29yfGVufDB8MHwwfHx8MA%3D%3D",
        caption: "Finding insights with machine learning 🧠📈",
        likes: 320,
        posted: "2024-09-30",
      },
      {
        id: "post_012",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlY29yfGVufDB8MHwwfHx8MA%3D%3D",
        caption: "Finding insights with machine learning 🧠📈",
        likes: 320,
        posted: "2024-09-30",
      },
    ],
  },
  {
    name: "Priya",
    profession: "UI/UX Designer",
    image:
      "https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.webp?a=1&b=1&s=612x612&w=0&k=20&c=RYp9uexcSQS3-KKUmfKk2PDyU5x1c-CC6AQ1SGworkc=",
    followers: 1600,
    following: 550,
    username: "priya_designs",
    description:
      "Creating beautiful and user-friendly designs. Obsessed with enhancing user experiences.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
  {
    name: "Vikas",
    profession: "Backend Developer",
    image:
      "https://media.istockphoto.com/id/116192438/photo/one-indian-it-software-engineer-white-collar-worker-computer-people.webp?a=1&b=1&s=612x612&w=0&k=20&c=yCT6pKSUFtfymcCnUzx6SeSqS8yrWLDeVYZH8mOcJ3c=",
    followers: 750,
    following: 290,
    username: "vikas_code",
    description:
      "Backend enthusiast who enjoys building scalable systems. Master of databases and APIs.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
  {
    name: "Neha",
    profession: "Marketing Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
    followers: 1850,
    following: 800,
    username: "neha_mkt",
    description:
      "Strategizing and growing brands. Passionate about digital marketing and customer engagement.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
  {
    name: "Siddharth",
    profession: "Cybersecurity Analyst",
    image:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MHwwfHx8MA%3D%3D",
    followers: 1120,
    following: 390,
    username: "sid_sec",
    description:
      "Protecting data and systems from cyber threats. Always up-to-date with the latest security trends.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
  {
    name: "Alisha",
    profession: "Data Analyst",
    image:
      "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=ECrwvW77HAQ-yxxWpOOrnbqCPdurCAxPWVfZ0CKwueM=",
    followers: 990,
    following: 410,
    username: "alisha_analyzes",
    description:
      "Analyzing complex data to make informed decisions. Passionate about data visualization and BI tools.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
  {
    name: "Rajesh",
    profession: "Product Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8MHwwfHx8MA%3D%3D",
    followers: 2100,
    following: 1020,
    username: "rajesh_products",
    description:
      "Leading products from concept to launch. Skilled at managing teams and delivering on customer needs.",
    posts: [
      {
        id: "post_007",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "New design sprint 🚀💡 #uxdesign",
        likes: 890,
        posted: "2024-09-15",
      },
      {
        id: "post_008",
        image:
          "https://images.unsplash.com/photo-1521302170141-d864fd42ae54?w=600&auto=format&fit=crop&q=60",
        caption: "User testing day! Exciting insights 👩‍💻",
        likes: 645,
        posted: "2024-10-02",
      },
      {
        id: "post_009",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&auto=format&fit=crop&q=60",
        caption: "Sketching the next big thing ✏️📐",
        likes: 720,
        posted: "2024-10-08",
      },
    ],
  },
];

export default Users;
