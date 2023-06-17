import ProfileCourse from "./ProfileCourse/ProfileCourse";

const ProfileCoursesList = ({ userData , count }) => {
  return (
    <>
      {userData && userData.courses.length !== 0 ? (
        userData.courses.slice(count).map((c, i) => {
          return <ProfileCourse key={i} data={c} />;
        })
      ) : (
        <h2 className="font-bold text-slate-600 text-2xl">سفارشی ندارید</h2>
      )}
    </>
  );
};

export default ProfileCoursesList;