import { useState } from 'react';
import { MdOutlineTimer } from "react-icons/md";
import Lms from "../components/Lms"
import { GiGraduateCap } from "react-icons/gi";
function studyManagement() {
  const [LSelcet,SetLSelect] = useState(false);
  const [Course,SetCourse] = useState(false);
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Lms/>
    </div>
  );
}

export default studyManagement;
