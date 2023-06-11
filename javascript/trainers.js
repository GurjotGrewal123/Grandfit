function fetch_info(i) {
    let profile = ["../images/kobe.png", "../images/lebron.png", "../images/jimmy.png", "../images/durant.png", "../images/kawhi-leonard.png"];
    let name = [
        "Kobe Bryant",
        "Lebron James",
        "Jimmy Butler",
        "Kevin Durant",
        "Kawhi Leonard"
    ];
    let status = [
        "Calisthenics Trainer",
        "Sports Coach",
        "Weight-Training Trainer",
        "Sports Coach",
        "MMA Trainer"
    ];
    let about = [
        " is an experienced calisthenics coach at our fitness company. With a passion for bodyweight training and a strong background in fitness, Kobe brings a unique blend of expertise and motivation to his coaching sessions. He has a deep understanding of calisthenics exercises and their benefits, helping individuals of all fitness levels achieve their goals through functional strength training. Kobe's coaching style is characterized by his attention to detail, patience, and ability to inspire clients to push their limits. Whether you're a beginner or an advanced practitioner, Kobe is dedicated to helping you improve your technique, increase your strength, and unlock your full potential through the art of calisthenics.",
        " is an esteemed sports coach at our fitness company, renowned for his exceptional athletic prowess and leadership skills. With a distinguished career as a professional athlete, LeBron brings his wealth of knowledge and experience to his coaching role. Specializing in various sports disciplines, including basketball, LeBron possesses a deep understanding of the game and a keen eye for detail. He is known for his ability to inspire and motivate athletes to reach their full potential, pushing them to excel both physically and mentally. LeBron's coaching approach emphasizes teamwork, strategy, and individual skill development, enabling athletes of all levels to enhance their performance and achieve their goals. With his dedication, passion, and unwavering commitment to excellence, LeBron James is a valuable asset to our fitness company and a true inspiration to aspiring athletes.",
        " is a highly skilled weight-training trainer at our fitness company, specializing in strength and resistance training. With a solid foundation in fitness and a passion for helping individuals achieve their fitness goals, Jimmy brings a wealth of expertise to his training sessions. He possesses an in-depth understanding of weightlifting techniques and proper form, ensuring clients maximize their results while minimizing the risk of injury. Jimmy's training style is characterized by his dedication, enthusiasm, and personalized approach. He takes the time to assess individual strengths and weaknesses, tailoring training programs to meet specific needs. Whether you're a beginner looking to build a strong foundation or an experienced lifter striving to break through plateaus, Jimmy is committed to guiding you on your fitness journey, helping you reach new levels of strength, endurance, and overall well-being.",
        " is an accomplished sports coach at our fitness company, recognized for his exceptional skills and extensive knowledge of various sports disciplines. With a decorated career as a professional athlete, Kevin brings a winning mentality and a deep understanding of the game to his coaching role. Specializing in basketball, Kevin's expertise spans technical training, strategic play, and mental conditioning. His coaching approach is marked by a combination of discipline, precision, and inspiration, empowering athletes to unlock their full potential. Kevin is dedicated to honing individual skills, fostering teamwork, and cultivating a strong work ethic among his trainees. Whether you're a beginner seeking to improve your fundamentals or an advanced athlete aiming for peak performance, Kevin Durant's coaching will elevate your game, instill confidence, and guide you toward success on and off the court.",
        " is an exceptional MMA trainer at our fitness company, renowned for his expertise in mixed martial arts and his dedication to helping individuals reach their fullest potential. With a background in combat sports and a deep understanding of various disciplines, Kawhi brings a unique blend of technical knowledge and strategic thinking to his training sessions. His coaching style emphasizes discipline, focus, and perseverance, as he guides his trainees through rigorous workouts and drills. Kawhi's attention to detail and commitment to proper technique ensure that his students develop a solid foundation in MMA while also improving their strength, conditioning, and overall athleticism. With his calm demeanor and ability to inspire confidence, Kawhi Leonard is an invaluable asset to our fitness company, empowering aspiring fighters to excel in the challenging world of mixed martial arts."
    ]
    document.getElementById("profile").src = profile[i];
    document.getElementById("name").innerHTML = name[i];
    document.getElementById("status").innerHTML = status[i];
    document.getElementById("about").innerHTML = name[i] + about[i];
}