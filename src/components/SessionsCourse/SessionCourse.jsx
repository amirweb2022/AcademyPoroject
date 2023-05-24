import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getOneSessionInfo } from "../../services/getOneSessionInfoServices";
const SessionCourse = ({ productData, shortName, token }) => {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const handleOpen = async (id) => {
    try {
      const { data } = await getOneSessionInfo(token, shortName, id);
      setVideo(data.session.video);
    } catch (error) {
      console.log(error);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full mt-5">
      <Accordion
        sx={{ boxShadow: "none", border: "2px solid #ddd" }}
        style={{ borderRadius: "15px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="text-slate-600 font-bold text-lg">جلسات دوره</h2>
        </AccordionSummary>
        {productData.sessions
          ? productData.sessions.map((session, index) => {
              return (
                <AccordionDetails key={index}>
                  <div className="w-full bg-gray-300/30 rounded-lg p-2 flex justify-between items-center border-[1px] border-gray-200 trasnition-all duration-150 hover:shadow-lg">
                    <div className="flex justify-center items-center gap-x-2">
                      <span className="bg-green-100 w-5 h-5 text-sm pt-0.5 lg:text-base lg:w-7 lg:h-7 text-center text-green-500 rounded-full lg:pt-1">
                        {index + 1}
                      </span>
                      {session.free ||
                      productData.isUserRegisteredToThisCourse ? (
                        <Link
                          to="#"
                          className="text-xs lg:text-sm text-slate-600 hover:text-blue-500"
                          onClick={() => handleOpen(session._id)}
                        >
                          {session.title}
                        </Link>
                      ) : (
                        <span className="text-xs lg:text-sm text-slate-600">
                          {session.title}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-center items-center gap-x-1 text-xs text-slate-500">
                      {session.free ||
                      productData.isUserRegisteredToThisCourse ? (
                        <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-green-100 text-green-500 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"
                            />
                          </svg>
                        </span>
                      ) : (
                        ""
                      )}
                      <span>{session.time}</span>
                      <span>دقیقه</span>
                    </div>
                  </div>
                </AccordionDetails>
              );
            })
          : ""}
      </Accordion>
      <ModalCourseVideo open={open} handleClose={handleClose} video={video} />
    </div>
  );
};

export default SessionCourse;
export const ModalCourseVideo = ({ open, handleClose, video }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center px-3 md:px-0"
    >
      <div className="text-white w-full md:w-2/4 flex justify-center items-center rounded-2xl overflow-hidden">
        {video ? (
          <video
            src={`http://localhost:4000/courses/covers/${video}`}
            controls
          />
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};