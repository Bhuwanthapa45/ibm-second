import Course from "./Course";

function Courses(props) {
  const Data = [
    {
      title: "English for Common Interactions in the Workplace: Basic Level",
      desc: "In a professional environment, we’re often faced with the need to respond appropriately according to what the situation calls for, whether it be related to situations in daily life or the workplace.",
      image: "https://static.vecteezy.com/system/resources/previews/000/223/689/original/people-talking-illustration-vector.jpg",
      link: "https://www.coursera.org/learn/english-common-interactions-workplace-basic-level"
    },
    {
      title: "Foundations of Data Structures and Algorithms Specialization",
      desc: "Create applications that are supported by highly efficient algorithms and data structures for the task at hand",
      image: "https://www.techgeekbuzz.com/media/post_images/Data_Structures_and_Algorithms_Course.jpg",
      link: "https://www.coursera.org/specializations/boulder-data-structures-algorithms"
    },
    {
      title: "Machine Learning with Artificial Intelligence",
      desc: "This free online course will be of great interest to students and individuals who have requisite background knowledge of computer programming and science. By the end of this course, you will be able to use artificial intelligence techniques to solve computational problems using real-life scenarios.",
      image: "https://wallpapercave.com/wp/wp2316798.jpg",
      link: "https://alison.com/course/machine-learning-with-artificial-intelligence?utm_source=bing&utm_medium=cpc&utm_campaign=531498932&utm_content=1358998909448010&utm_term=kwd-84938597287859:loc-90&msclkid=4a6fd69776921060e959b03012c40d3b"
    },
    {
      title: "Free Business Courses from Harvard",
      desc: "Boost your career and expand your knowledge with business courses from Harvard.",
      image: "https://1.bp.blogspot.com/-cQk1EwTYQ1I/V1qEedsuv-I/AAAAAAAAAcM/1ur3d5sieyca91aiaFCCohJ5B5FDRH42QCLcB/s1600/hjb.jpg",
      link: "https://pll.harvard.edu/subject/business/free"
    },
    {
      title: "Learn Mechatronics",
      desc: "Learn Mechatronics, earn certificates with paid and free online courses from Georgia Tech, Northwestern University, IIT Kanpur, CalArts and other top universities around the world. Read reviews to decide if a class is right for you.",
      image: "https://th.bing.com/th/id/OIP.YlCUhEIic5bSkxLCDfGAEQHaEK?rs=1&pid=ImgDetMain",
      link: "https://www.classcentral.com/subject/mechatronics"
    },
    {
      title: "Hidden Secrets of Sales & Marketing",
      desc: "This free online sales and marketing course is the fourth part of a series and will teach you about the specialization of specific sales and marketing tools and techniques, including how to effectively handle customer objections.",
      image: "https://gorgeoustip.com/wp-content/uploads/2021/02/tips-to-choose-digital-marketing-course.jpg",
      link: "https://alison.com/course/hidden-secrets-of-sales-and-marketing-part-four?utm_source=bing&utm_medium=cpc&utm_campaign=531498933&utm_content=1364496467606863&utm_term=kwd-85282193803414:loc-90&msclkid=5e7cf69739ff1701f05a90305f1e4235"
    },
    {
      title: "Learn HTML, CSS, Javascript, React",
      desc: "Improve your web development skills in a variety of languages and frameworks, including HTML, CSS, JavaScript, React, TypeScript, and cutting-edge methods in AI.",
      image: "https://www.oso-web.com/wp-content/uploads/2018/03/homepage-design-connecticut-1.jpeg",
      link: "https://v2.scrimba.com/courses?price=free&ref=classcentral"
    },
    {
      title: "Technical Report Writing for Engineers",
      desc: "Technical reports are a vital tool for engineers to communicate their ideas. This online course introduces technical report writing and teaches the techniques you need to construct well-written engineering reports.",
      image: "https://technologyforlearners.com/wp-content/uploads/2023/11/Modern-Office-min-1024x679.png",
      link: "https://www.classcentral.com/course/technical-report-writing-for-engineers-9087"
    },
    {
      title: "Crash Course on Python",
      desc: "Understand what Python is and why Python is relevant to automation. Write short Python scripts to perform automated actions, by Google.",
      image: "https://www.fita.in/wp-content/uploads/2020/01/google-python.jpg",
      link: "https://www.coursera.org/learn/python-crash-course"
    },
  ];

  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-indigo-400">
      <div className="mt-10 h-full w-full items-center justify-center gap-5 flex-wrap">
        <h1 className="text-center m-5 p-5 text-5xl hover:text-white">Courses</h1>
        <div className="w-[100vw] mt-5 flex items-center justify-center gap-5 flex-wrap mb-10">
          {Data.map((data, index) => (
            <Course key={index} image={data.image} link={data.link} desc={data.desc.length > 75 ? data.desc.substring(0, 75) + "..." : data.desc} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
