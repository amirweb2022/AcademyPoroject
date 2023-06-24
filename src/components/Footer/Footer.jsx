import { Link, NavLink } from "react-router-dom";

const Footer = ({ course }) => {
  const social_media = [
    {
      text: "اینستاگرام ",
      to: "https://instagram.com/amirmohammad.web?igshid=ZGUzMzM3NWJiOQ==",
    },
    {
      text: "تلگرام ",
      to: "https://t.me/fronthooks_support",
    },
    {
      text: "یا گیت هاب ",
      to: "https://github.com/amirweb2022",
    },
  ];
  const nav_Link = [
    {
      display: "خانه",
      to: "/",
    },
    {
      display: "دوره های آموزشی",
      to: "/courses",
    },
    {
      display: "ارتباط با ما",
      to: "/ContactUs",
    },
    {
      display: "مقاله ها",
      to: "/articles",
    },
  ];
  return (
    <footer className="py-6 md:py-8 mt-10 border-t-2 border-t-gray-200 bg-gray-200 px-4 rounded-t-3xl">
      <div className="grid gap-10 md:gap-14 grid-cols-5 grid-row-2 container md:max-w-screen-xl mx-auto">
        <div className="col-span-5 md:col-span-2 flex flex-col justify-start">
          <div>
            <h2 className="text-slate-500 font-normal text-xs sm:text-sm mb-4">
              آکادمی آنلاین فرانت هوکس، دوره های کوچ محور
              <strong className="font-black mr-1">برنامه نویسی وب</strong>
            </h2>
            <div className="sm:leading-7 text-xs sm:text-sm leading-5 text-slate-500">
              <span>
                <strong>امیرمحمد حسین زاده هستم ، برنامه نویس وب</strong>و مدیر
                وبسایت آموزشی فرانت هوکس.
              </span>
              <p className="leading-5 md:leading-7">
                ارائه آموزشی کاربردی، پروژه محور در کنار مربی هدف اصلی ماست.
                ابتدا در یک مسیر یادگیری دقیق قرار می گیرید. در این مسیر همه
                آموزش ها با وسواس خاصی طراحی شده اند به گونه ای که مفاهیم برنامه
                نویسی را در طی پروژه های متنوع به خوبی درک بکنید. در طی مسیر شما
                قطعا تنها نخواهید بود، بلکه مربی کار آزموده در کنارتان هست تا
                خیالتان از بابت مشکلات فنی و مشاوره ای راحت باشد. زمان شما برای
                ما مهم هست و میخواهیم بدون سعی و خطا در کمترین زمان ممکن به
                بازار کار برسید. علاوه بر این، پشتیبانی دوره ها مدام العمر است و
                برای همیشه به سوالات شما پاسخ داده می شود. این یعنی خلق یک تجربه
                خوب در یک مسیر مشخص به همراه مربی و پشتیبان.
                <br />
                شما می توانید از طریق
                {social_media.map((media, i) => {
                  return (
                    <Link to={media.to} key={i} className="text-blue-500 mr-1">
                      {media.text}
                    </Link>
                  );
                })}
                با ما در ارتباط باشید
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h3 className="text-xl mb-4 text-slate-600">بخش های سایت</h3>
          <nav>
            <ul className="text-sm">
              {nav_Link.map((nav, i) => {
                return (
                  <li className="list-disc py-2 list-inside" key={i}>
                    <NavLink
                      to={nav.to}
                      className="py-2 transition-all text-slate-500 duration-300 hover:text-blue-500"
                    >
                      {nav.display}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h3 className="text-xl mb-4 text-slate-600">دوره های آموزشی</h3>
          <nav>
            <ul className="text-sm">
              {course.slice(-6).map((course, i) => {
                return (
                  <li className="list-disc py-2 list-inside" key={i}>
                    <NavLink
                      to={`/course/${course.shortName}`}
                      className="py-2 transition-all text-slate-500 duration-300 hover:text-blue-500"
                    >
                      {course.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="col-span-5 md:col-span-1">
          <img
            alt="نماد اعتماد زرین پال"
            src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
            width="70"
            height="100"
            decoding="async"
            data-nimg="1"
            loading="lazy"
            style={{ color: "transparent" }}
          />
        </div>
        <div class="col-span-5">
          <p class="text-center tex-xs">
            © تمامی حقوق برای فرانت هوکس محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;