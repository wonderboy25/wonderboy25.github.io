import { Box } from "@chakra-ui/react";
import "./style.css";

const CalendarIcon = () => {
  return (
    <Box className={"calendarStyle"}>
      <svg
        fill="#f3f3f3"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 16.16 5.746-5.746v4.214h18.254v3.065h-18.254v4.214zm18.254-7.28h-18.254v-3.066h18.254v-4.214l5.746 5.746-5.746 5.746z" />
      </svg>
      {/*<svg*/}
      {/*  width="24"*/}
      {/*  height="24"*/}
      {/*  viewBox="0 0 24 24"*/}
      {/*  fill="none"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*  <g id="Calendar">*/}
      {/*    <path*/}
      {/*      id="Icon"*/}
      {/*      d="M8 9.5H16M8 3.5V2M16 3.5V2M11 22H13C15.8003 22 17.2004 22 18.27 21.455C19.2108 20.9757 19.9757 20.2108 20.455 19.27C21 18.2004 21 16.8003 21 14V12C21 9.19974 21 7.79961 20.455 6.73005C19.9757 5.78924 19.2108 5.02433 18.27 4.54497C17.2004 4 15.8003 4 13 4H11C8.19974 4 6.79961 4 5.73005 4.54497C4.78924 5.02433 4.02433 5.78924 3.54497 6.73005C3 7.79961 3 9.19974 3 12V14C3 16.8003 3 18.2004 3.54497 19.27C4.02433 20.2108 4.78924 20.9757 5.73005 21.455C6.79961 22 8.19974 22 11 22Z"*/}
      {/*      stroke="#F8F8F8"*/}
      {/*      strokeWidth="2"*/}
      {/*      strokeLinecap="round"*/}
      {/*      strokeLinejoin="round"*/}
      {/*    />*/}
      {/*  </g>*/}
      {/*</svg>*/}
    </Box>
  );
};

export default CalendarIcon;
