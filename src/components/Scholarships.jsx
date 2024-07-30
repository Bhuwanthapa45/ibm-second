import Course from "./Course";
function Scholarships(props) {
  const Data = [
    {
        title : "Fulbright U.S. Student Program",
        desc : "The Fulbright U.S. Student Program offers research, study, and teaching opportunities in over 140 countries to recent graduates and graduate students.",
        image:"https://th.bing.com/th/id/OIP.NWI3oHp5eCmib00dBswpogHaEM?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        link:"https://us.fulbrightonline.org/fulbright-us-student-program"
    },
    {
        title : "Chevening Scholarships",
        desc : " Chevening Scholarships are the UK government’s global scholarship program, offering awards to outstanding individuals with leadership potential from around the world to study a master’s degree in the UK",
        image:"https://th.bing.com/th/id/OIP.ECrCivENX2Wa-QGmmI0XtwHaD4?w=310&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        link:"https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
    },
    {
        title : "DAAD Scholarships",
        desc : "The DAAD provides scholarships for international students to study in Germany. This includes funding for undergraduate, graduate, and doctoral programs .",
        image:"https://th.bing.com/th/id/OIP.OeKiOH4gpAieOEGwCpUwSAHaEL?w=293&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        link:"https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=10000102"
    },
    {
        title : "Erasmus+",
        desc : " Erasmus+ is the EU’s program to support education, training, youth, and sport in Europe, providing grants for students, staff, and institutions.",
        image:"https://th.bing.com/th/id/OIP.4SO6NYsZQzTnOeqzXr-rfwHaEs?w=310&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        link:"https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=10000102"
    },
    {
        title : "Rhodes Scholarships",
        desc : "Rhodes Scholarships provide outstanding students from around the world the opportunity to study at the University of Oxford. They cover all university and college fees, living expenses, and travel.",
        image:"https://th.bing.com/th/id/OIP.3EraeABEsEkTbqOUmWUSawAAAA?rs=1&pid=ImgDetMain",
        link:"https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/"
    }

] 


    return ( 
        <div className=" h-full w-full flex flex-col overflow-hidden bg-indigo-400">
             <div className="mt-10 h-full w-full items-center justify-center gap-5 flex-wrap">
                <h1 className=" text-center m-5 p-5 text-5xl hover:text-white" >Scholarships</h1>
                <div className="w-[100vw] mt-5 flex items-center justify-center gap-5 flex-wrap mb-10">
                {Data.map((data, index) => ( 
                    <Course key={index} image={data.image} link={data.link} desc={ data.desc.length > 75 ? data.desc.substring(0,75)+"..."  : data.desc} title={data.title} />
                    ) 
                  )
                }
                </div>
             </div>
        </div>
     );
}

export default Scholarships;