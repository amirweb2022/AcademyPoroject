import { useState } from "react";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import activeImage from "../../assets/svg/indicator.svg"
import Drawer from "@mui/material/Drawer";
import avatar from "../../assets/images/avatar.jpg";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import React from "react";
function TemporaryDrawer({ nav_Link }) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, height: "100%", position: "relative" }}
      role="presentation"
    >
      <div className="w-full flex justify-between items-center py-4">
        <div>
          <Button>
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={140}
                height={35}
                fill="none"
                class="text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M120.258 26.865a4.053 4.053 0 0 1-1.133 2.917 4 4 0 0 1-6.606-1.344 4.025 4.025 0 0 1-.271-1.573 3.97 3.97 0 0 1 2.027-3.414c.09-.055-.024.109 0 0l1.86-1.652a8.497 8.497 0 0 0 2.304-5.793c0-2.926-1.711-5.901-4.17-7.457-.036-.094.094.055 0 0a3.97 3.97 0 0 1-2.026-3.413 4.045 4.045 0 0 1 1.133-2.918A4.009 4.009 0 0 1 116.247 1a3.992 3.992 0 0 1 2.872 1.218 4.027 4.027 0 0 1 1.133 2.917 8.52 8.52 0 0 0 2.347 5.832l.817.8c.326.285.668.551 1.024.798a3.874 3.874 0 0 1 2.022 2.91 3.894 3.894 0 0 1-.818 2.96 3.897 3.897 0 0 1-1.204 1.003c-.063.036.033-.067 0 0a9.003 9.003 0 0 0-4.182 7.427Zm4.483-21.742c0 .796.235 1.575.676 2.237a4.007 4.007 0 0 0 4.114 1.711 3.994 3.994 0 0 0 2.05-1.102 4.047 4.047 0 0 0 .869-4.386 4.026 4.026 0 0 0-1.476-1.806 3.994 3.994 0 0 0-5.058.501 4.035 4.035 0 0 0-1.175 2.845Zm4.007 17.717c-.792 0-1.567.236-2.226.678a4.02 4.02 0 0 0-1.476 1.806 4.047 4.047 0 0 0 .869 4.387 3.987 3.987 0 0 0 4.366.873 4.015 4.015 0 0 0 1.799-1.484 4.038 4.038 0 0 0-1.799-5.954 3.998 3.998 0 0 0-1.533-.308v.002ZM139 15.994a4.04 4.04 0 0 0-.675-2.236 4.014 4.014 0 0 0-1.798-1.483 3.991 3.991 0 0 0-4.367.873 4.042 4.042 0 0 0-.869 4.387 4.013 4.013 0 0 0 3.702 2.484 4.002 4.002 0 0 0 2.832-1.18A4.042 4.042 0 0 0 139 15.993v.001Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M110.007 11.969c-.793 0-1.567.236-2.226.678a4.022 4.022 0 0 0-1.476 1.807 4.044 4.044 0 0 0 .869 4.386 4.003 4.003 0 0 0 4.366.873 4.008 4.008 0 0 0 1.798-1.483 4.035 4.035 0 0 0-1.798-5.953 3.995 3.995 0 0 0-1.533-.308ZM.734 13.137h2.077c.156 0 .234.078.234.234v2.395a.206.206 0 0 1-.084.167.208.208 0 0 1-.15.067H.734a.208.208 0 0 1-.15-.067.206.206 0 0 1-.084-.167V13.37c0-.156.078-.234.234-.234Zm2.077 0h2.076c.157 0 .235.078.235.234v2.395a.206.206 0 0 1-.084.167.208.208 0 0 1-.15.067H2.81a.208.208 0 0 1-.15-.067.206.206 0 0 1-.084-.167V13.37c0-.156.078-.234.234-.234Zm2.077 0h2.076c.156 0 .234.078.234.234v2.395a.206.206 0 0 1-.083.167.208.208 0 0 1-.151.067H4.888a.208.208 0 0 1-.151-.067.206.206 0 0 1-.084-.167V13.37c0-.156.078-.234.235-.234Zm2.076 0h2.077c.156 0 .234.078.234.234v2.395a.206.206 0 0 1-.084.167.208.208 0 0 1-.15.067H6.964a.208.208 0 0 1-.15-.067.206.206 0 0 1-.084-.167V13.37c0-.156.078-.234.234-.234ZM13.512 16c-.38 0-.754-.061-1.122-.184a2.468 2.468 0 0 1-.971-.687 2.5 2.5 0 0 1-.955.687A3.137 3.137 0 0 1 9.376 16H9.04a.227.227 0 0 1-.167-.067.268.268 0 0 1-.067-.167v-2.361c0-.067.027-.123.083-.168.045-.056.095-.084.151-.084h.703a.454.454 0 0 0 .335-.133.51.51 0 0 0 .134-.352V9.353h2.411v3.298c0 .156.05.28.15.369.113.089.213.133.302.133h.62a.54.54 0 0 0 .553-.469l.67-3.331 2.46.401-.569 2.813c-.044.168-.022.307.067.419.09.112.212.167.369.167h.937a.454.454 0 0 0 .335-.133.49.49 0 0 0 .134-.335V8.917h2.411v3.7c0 .358.157.536.47.536h.736c.156 0 .234.079.234.235v2.378c0 .156-.078.234-.234.234h-.335c-.402 0-.781-.061-1.139-.184a2.5 2.5 0 0 1-.954-.687 2.49 2.49 0 0 1-1.005.67c-.38.134-.764.201-1.155.201-.167 0-.357-.011-.57-.034a4.535 4.535 0 0 1-.619-.15 3.07 3.07 0 0 1-.586-.268 1.858 1.858 0 0 1-.469-.419c-.29.324-.597.553-.92.687a2.723 2.723 0 0 1-1.005.184Zm11.102-4.789-1.725-1.658 5.342-6.279 1.741 1.608-3.114 3.684h6.178c.424 0 .82.083 1.189.25.38.157.709.375.988.654s.497.608.653.988c.167.368.251.77.251 1.205v1.24c0 .446-.09.859-.268 1.238-.178.38-.418.71-.72.988-.29.28-.625.497-1.005.653a3.3 3.3 0 0 1-1.188.218H22.27a.208.208 0 0 1-.151-.067c-.056-.056-.084-.112-.084-.167v-2.378c0-.056.023-.106.067-.15a.206.206 0 0 1 .168-.085h11.134a.34.34 0 0 0 .185-.067c.078-.044.117-.122.117-.234v-1.256a.335.335 0 0 0-.117-.268.369.369 0 0 0-.268-.117h-8.707ZM40.16 16c-.458 0-.882-.095-1.273-.285-.39-.2-.72-.463-.988-.787a3.272 3.272 0 0 1-.586-1.122 3.025 3.025 0 0 1-.05-1.306l.301-1.54a3.04 3.04 0 0 1 .352-.954A3.027 3.027 0 0 1 39.44 8.75a2.856 2.856 0 0 1 1.02-.184h.922c.424 0 .82.083 1.189.25.38.157.709.375.988.654s.502.608.67.988c.167.38.25.781.25 1.205v1.49h.587c.156 0 .234.073.234.218v2.395c0 .156-.078.234-.234.234h-.603a3.657 3.657 0 0 1-.955 2.177 4.684 4.684 0 0 1-2.026 1.356l-2.645.904-.72-2.227 2.645-.904c.358-.123.659-.307.904-.553.246-.234.369-.547.369-.937v-.117a2.206 2.206 0 0 1-.586.217 2.754 2.754 0 0 1-.67.084h-.62Zm-.335-2.847h2.243l-.016-1.507a.274.274 0 0 0-.084-.2.346.346 0 0 0-.201-.1h-1.574c-.134-.012-.229.066-.285.233l-.267 1.357c-.023.056-.012.106.033.15a.208.208 0 0 0 .15.067ZM45.065 16c-.157 0-.235-.078-.235-.234v-2.361a.27.27 0 0 1 .05-.168c.033-.056.095-.084.184-.084h.586c-.078-.055-.123-.161-.134-.318 0-.167.017-.34.05-.519l.268-1.289a3.01 3.01 0 0 1 .369-.988 3.52 3.52 0 0 1 .67-.787 3.08 3.08 0 0 1 .887-.519 2.79 2.79 0 0 1 1.055-.167l.736.016c.425.011.821.1 1.19.268.379.156.708.374.987.653.28.268.503.592.67.971.167.369.251.77.251 1.206v.687c0 .256-.017.446-.05.569-.022.111-.04.178-.05.2h2.327v-1.774a.68.68 0 0 0-.134-.369.698.698 0 0 0-.368-.3l-6.396-2.01.67-2.495 6.161 1.909c.38.111.72.284 1.022.519.312.234.575.508.787.82.212.302.374.63.485.988.123.346.184.698.184 1.055v1.96c0 .334-.072.658-.217.97-.145.302-.34.57-.586.804a2.841 2.841 0 0 1-.82.57 2.137 2.137 0 0 1-.939.217h-2.863v-1.34l-.117.218a1.848 1.848 0 0 1-.352.452 2.81 2.81 0 0 1-.653.47c-.256.133-.569.2-.937.2h-4.739Zm5.156-2.847v-1.74a.295.295 0 0 0-.083-.219.295.295 0 0 0-.218-.083h-1.373a.294.294 0 0 0-.235.067.326.326 0 0 0-.117.217l-.234 1.424a.41.41 0 0 0 .067.234c.044.056.106.09.184.1h2.01ZM62.224 8.85v3.265a1 1 0 0 0 .302.737c.212.201.463.301.753.301h7.033a.454.454 0 0 0 .335-.133.434.434 0 0 0 .134-.319V9.336h2.428v3.332c0 .123.044.234.133.335.09.1.201.15.335.15h.486c.056 0 .106.028.15.084.056.045.084.095.084.15v2.379c0 .055-.028.111-.083.167a.208.208 0 0 1-.151.067h-.1c-.391 0-.76-.067-1.106-.2a2.572 2.572 0 0 1-.954-.67 2.6 2.6 0 0 1-.988.686 3.479 3.479 0 0 1-1.139.184h-6.362c-.514 0-1-.095-1.457-.285a3.91 3.91 0 0 1-1.172-.803 4.136 4.136 0 0 1-.804-1.19 3.767 3.767 0 0 1-.285-1.456V8.85h2.428Zm2.093-2.26h2.177v2.26h-2.177V6.59Zm2.177 0h2.177v2.26h-2.177V6.59Zm10.272 1.138h2.176v-2.26h-2.176v2.26Zm-.553 5.425a.454.454 0 0 0 .335-.133.49.49 0 0 0 .134-.335V8.85h2.411v3.818c0 .458-.09.893-.268 1.306a3.236 3.236 0 0 1-.703 1.055 3.415 3.415 0 0 1-1.072.72 3.317 3.317 0 0 1-1.289.251h-1.59a.227.227 0 0 1-.168-.067.268.268 0 0 1-.067-.167V13.42c0-.067.022-.128.067-.184a.206.206 0 0 1 .167-.084h2.043ZM82.68 16h-2.41V4.179h2.411V16Zm3.855-6.664v3.432c0 .123.039.218.117.285.09.067.195.1.318.1h.737c.156 0 .234.079.234.235v2.378c0 .156-.078.234-.234.234h-.335c-.134 0-.29-.034-.469-.1a1.35 1.35 0 0 1-.385-.252v.252a3.1 3.1 0 0 1-.234 1.222c-.145.38-.352.72-.62 1.021a4.126 4.126 0 0 1-.954.787 6.084 6.084 0 0 1-1.19.553l-2.628.904-.737-2.227 2.73-.938c.38-.123.675-.34.887-.653.223-.312.335-.664.335-1.055V9.336h2.428Zm6.55.435V8.164c.01-.078-.012-.14-.067-.185a.407.407 0 0 0-.201-.083h-1.558c-.178 0-.284.09-.318.268l-.217 1.356a.263.263 0 0 0 .033.184c.045.045.1.067.167.067h2.16Zm-.402 3.382a.422.422 0 0 0 .284-.1c.079-.067.118-.167.118-.301v-.77a.872.872 0 0 1-.185.133 1.216 1.216 0 0 1-.234.1c-.1.023-.218.034-.352.034h-.92c-.48 0-.922-.089-1.323-.268-.391-.19-.72-.44-.988-.753a2.89 2.89 0 0 1-.57-1.122 3 3 0 0 1-.033-1.34l.2-1.038c.068-.346.19-.664.37-.954a3.026 3.026 0 0 1 1.523-1.256 2.81 2.81 0 0 1 1.005-.184h.887c.424 0 .815.084 1.172.251.368.156.692.374.971.653a2.956 2.956 0 0 1 .888 2.127v4.303c0 .458-.09.887-.268 1.29a3.235 3.235 0 0 1-.703 1.054 3.414 3.414 0 0 1-1.072.72 3.139 3.139 0 0 1-1.29.268H87.71a.227.227 0 0 1-.168-.067.268.268 0 0 1-.067-.167v-2.361c0-.067.023-.123.067-.168.034-.056.09-.084.168-.084h4.973ZM90.874 1.768h2.177v2.26h-2.177v-2.26Z"
                ></path>
                <path
                  fill="currentColor"
                  fill-opacity="0.77"
                  d="M10.353 30.152h.122a.53.53 0 0 0 .402-.166.548.548 0 0 0 .166-.402v-1.678h.717v1.713c0 .152.055.277.166.376a.6.6 0 0 0 .402.148h.358c.035 0 .064.012.088.035a.119.119 0 0 1 .043.097v.603c-.011.081-.055.122-.13.122h-.237a1.2 1.2 0 0 1-1.04-.56c-.134.187-.282.33-.446.429a1.06 1.06 0 0 1-.55.14c-.192 0-.376-.047-.55-.14a1.026 1.026 0 0 1-.42-.428 1.18 1.18 0 0 1-.455.428c-.18.093-.376.14-.585.14a1.26 1.26 0 0 1-.708-.201c-.198-.14-.39-.353-.577-.638l-.725-1.137a.885.885 0 0 0-.376-.305.948.948 0 0 0-.472-.088l-.568.079a.815.815 0 0 0-.289.105.716.716 0 0 0-.227.192.84.84 0 0 0-.21.56v.183l1.495.34a.836.836 0 0 1 .664.839v.307c0 .227-.038.44-.114.638-.075.198-.183.37-.323.515-.14.152-.306.271-.498.359a1.444 1.444 0 0 1-.62.13h-1.68c-.25 0-.486-.049-.708-.148a1.723 1.723 0 0 1-.577-.393 1.788 1.788 0 0 1-.384-.577 1.742 1.742 0 0 1-.14-.7v-2.167h.717v2.046c0 .151.026.29.078.42.059.133.137.247.236.34a1.062 1.062 0 0 0 .77.323H4.82a.83.83 0 0 0 .341-.07.71.71 0 0 0 .28-.183.82.82 0 0 0 .192-.271.74.74 0 0 0 .061-.34v-.316l-2.132-.506v-.76c0-.222.04-.426.122-.613a1.752 1.752 0 0 1 .778-.865 1.58 1.58 0 0 1 .55-.175l.464-.07c.28-.035.548.01.804.131.256.117.463.289.62.516l.804 1.215c.082.116.181.218.298.306a.726.726 0 0 0 .41.122.65.65 0 0 0 .42-.14.582.582 0 0 0 .227-.358l.289-1.45.699.13-.236 1.215a.481.481 0 0 0 .122.428.55.55 0 0 0 .42.175Zm2.335-.009h1.469c.081 0 .122.041.122.123v.612c0 .081-.04.122-.122.122h-1.469c-.081 0-.122-.04-.122-.122v-.612c0-.082.04-.122.122-.122Zm1.468 0h1.469c.081 0 .122.041.122.123v.612c0 .081-.04.122-.122.122h-1.469c-.081 0-.122-.04-.122-.122v-.612c0-.082.04-.122.122-.122Zm1.538 1.906h.822v.83h-.822v-.83Zm1.276 0h.83v.83h-.83v-.83Zm.385-1.905a.538.538 0 0 0 .393-.167.538.538 0 0 0 .166-.393v-1.678h.717v1.678c0 .192-.038.376-.114.55-.07.17-.169.318-.297.447a1.453 1.453 0 0 1-1.005.419h-1.59a.119.119 0 0 1-.088-.035.14.14 0 0 1-.035-.087v-.603c0-.035.012-.064.035-.088a.108.108 0 0 1 .087-.044h1.731Zm3.722.856c-.193 0-.37-.04-.533-.122a1.25 1.25 0 0 1-.411-.324 1.393 1.393 0 0 1-.236-.463 1.212 1.212 0 0 1-.018-.542l.149-.795a1.22 1.22 0 0 1 1.197-.997h.498c.181 0 .35.035.507.105.158.064.295.158.411.28.117.117.207.253.271.41.07.158.105.324.105.499v1.093h.664c.082 0 .123.04.123.122v.612c0 .081-.041.122-.123.122h-.673v.044a.288.288 0 0 1-.008.07 1.829 1.829 0 0 1-.394 1.066 1.95 1.95 0 0 1-.944.673l-1.075.367-.227-.708 1.119-.376c.245-.081.44-.218.585-.41.146-.193.219-.42.219-.682v-.123a.571.571 0 0 1-.193.062c-.07.011-.14.017-.21.017h-.803Zm-.079-.857h1.294v-1.092a.464.464 0 0 0-.14-.34.464.464 0 0 0-.341-.14h-.62a.475.475 0 0 0-.307.104.48.48 0 0 0-.157.28l-.14.708a.4.4 0 0 0 .411.48Zm3.89 0a.538.538 0 0 0 .393-.166.537.537 0 0 0 .166-.393v-1.678h.717v1.678c0 .192-.038.376-.114.55a1.36 1.36 0 0 1-.297.447 1.453 1.453 0 0 1-1.005.419h-1.066a.119.119 0 0 1-.088-.035.14.14 0 0 1-.035-.087v-.603c0-.035.012-.064.035-.088a.108.108 0 0 1 .088-.044h1.206Zm.472-3.198h.83v-.83h-.83v.83Zm3.005 1.914a1.434 1.434 0 0 1 1.092-1.434l1.198-.306v-.69h.716v3.103c0 .081.018.16.053.236a.695.695 0 0 0 .14.2.98.98 0 0 0 .21.132.673.673 0 0 0 .244.043h.262c.082 0 .123.041.123.123v.612c0 .081-.041.122-.123.122h-.262c-.28 0-.524-.073-.734-.218a1.477 1.477 0 0 1-.49-.577.507.507 0 0 1-.2.105.887.887 0 0 1-.245.035h-1.075c-.28 0-.501-.085-.664-.254-.163-.169-.245-.39-.245-.664v-.568Zm2.29-.962-1.023.254a.708.708 0 0 0-.402.28.784.784 0 0 0-.148.463v.594h1.573v-1.59Zm3.65 2.247h1.293v-1.102a.436.436 0 0 0-.14-.332.464.464 0 0 0-.341-.14h-.62a.475.475 0 0 0-.306.105.48.48 0 0 0-.158.28l-.14.699a.4.4 0 0 0 .088.34c.081.1.19.15.323.15Zm-1.146-.499.175-.9a1.219 1.219 0 0 1 1.197-.988h.49c.18 0 .35.035.507.105a1.23 1.23 0 0 1 .681.682c.07.157.105.326.105.507v1.066a.882.882 0 0 1-.244.638.852.852 0 0 1-.63.245h-1.057c-.18 0-.35-.04-.507-.122-.157-.082-.288-.225-.393-.429a.994.994 0 0 1-.437.429 1.21 1.21 0 0 1-.533.122h-.236c-.082 0-.123-.04-.123-.122v-.612a.11.11 0 0 1 .035-.079.108.108 0 0 1 .087-.044h.28a.579.579 0 0 0 .385-.14.595.595 0 0 0 .218-.358Zm6.105 1.233c0 .081-.04.122-.122.122h-.306c-.192 0-.373-.035-.542-.105a1.479 1.479 0 0 1-.751-.752 1.468 1.468 0 0 1-.105-.55v-4.431h.716v4.422c0 .152.056.283.166.393a.538.538 0 0 0 .394.166h.428c.035 0 .064.015.087.044a.118.118 0 0 1 .035.088v.603Zm1.08-.735a.538.538 0 0 0 .394-.166.538.538 0 0 0 .166-.393v-1.678h.717v1.678c0 .192-.038.376-.114.55-.07.17-.169.318-.297.447a1.453 1.453 0 0 1-1.005.419H39.14a.119.119 0 0 1-.088-.035.14.14 0 0 1-.035-.087v-.603c0-.035.012-.064.035-.088a.107.107 0 0 1 .088-.044h1.206Zm.473-3.198h.83v-.83h-.83v.83Zm2.754 1.215v1.46c0 .15.055.276.166.375.117.099.25.148.402.148h.795c.082 0 .123.041.123.123v.612c0 .081-.041.122-.123.122h-.672a1.06 1.06 0 0 1-.385-.07.712.712 0 0 1-.306-.253v.314c0 .21-.035.411-.105.603-.064.193-.157.37-.28.533a1.793 1.793 0 0 1-.42.42 2.015 2.015 0 0 1-.541.288l-1.075.367-.227-.699 1.127-.376a1.159 1.159 0 0 0 .804-1.119V28.16h.717Zm1.547 3.889h.83v.83h-.83v-.83Zm1.022-1.905a.538.538 0 0 0 .394-.167.538.538 0 0 0 .166-.393v-1.678h.716v1.678c0 .192-.038.376-.113.55-.07.17-.17.318-.297.447A1.45 1.45 0 0 1 46 31h-1.066a.119.119 0 0 1-.087-.035.14.14 0 0 1-.035-.087v-.603c0-.035.012-.064.035-.088a.107.107 0 0 1 .087-.044h1.206Zm9.09.856a1.15 1.15 0 0 1-.368-.061.786.786 0 0 1-.323-.262v.314c0 .216-.044.417-.131.603-.088.187-.207.35-.359.49a1.51 1.51 0 0 1-.515.323 1.55 1.55 0 0 1-.612.123H51.4a1.7 1.7 0 0 1-.708-.15 1.72 1.72 0 0 1-.577-.392 1.911 1.911 0 0 1-.393-.577 1.743 1.743 0 0 1-.14-.7v-2.42h.717v2.298a1.089 1.089 0 0 0 1.084 1.084h1.538a.892.892 0 0 0 .83-.55.83.83 0 0 0 .07-.341V28.15h.717v1.442a.549.549 0 0 0 .175.393.55.55 0 0 0 .393.157h.183a.6.6 0 0 0 .612-.498l.288-1.45.709.13-.236 1.18a.495.495 0 0 0 .113.446.53.53 0 0 0 .42.192h.725V27.89h.717v2.237a.852.852 0 0 1-.245.63.852.852 0 0 1-.63.244h-.576a1.11 1.11 0 0 1-.533-.131 1.145 1.145 0 0 1-.402-.428 1.179 1.179 0 0 1-.455.428 1.252 1.252 0 0 1-.568.131Zm2.01-3.758h-.831v-.83h.83v.83Zm-1.285 0h-.83v-.83h.83v.83Zm.62-1.154h-.83v-.83h.83v.83Zm1.569 7.106-.227-.7 1.127-.375a1.1 1.1 0 0 0 .577-.428c.145-.199.218-.426.218-.682v-2.85h.717v2.78c0 .215-.032.42-.096.612a1.968 1.968 0 0 1-.7.979 1.862 1.862 0 0 1-.55.297l-1.066.367Zm1.634-6.818h.83v.83h-.83v-.83ZM62.968 31c-.193 0-.37-.04-.534-.122a1.25 1.25 0 0 1-.41-.324 1.395 1.395 0 0 1-.237-.463 1.21 1.21 0 0 1-.017-.542l.148-.795a1.23 1.23 0 0 1 .42-.717c.227-.186.486-.28.778-.28h.498c.18 0 .35.035.507.105.157.064.294.158.41.28.117.117.207.253.272.41.07.158.105.324.105.499v1.093h.664c.081 0 .122.04.122.122v.612c0 .081-.04.122-.122.122h-.673v.044a.284.284 0 0 1-.009.07 1.828 1.828 0 0 1-.393 1.066 1.95 1.95 0 0 1-.944.673l-1.075.367-.227-.708 1.118-.376c.245-.081.44-.218.586-.41.145-.193.218-.42.218-.682v-.123a.572.572 0 0 1-.192.062 1.27 1.27 0 0 1-.21.017h-.804Zm-.08-.857h1.294v-1.092a.464.464 0 0 0-.14-.34.464.464 0 0 0-.34-.14h-.621a.475.475 0 0 0-.306.104.48.48 0 0 0-.157.28l-.14.708a.4.4 0 0 0 .41.48Zm4.712 0h1.293v-1.1a.435.435 0 0 0-.14-.333.464.464 0 0 0-.34-.14h-.62a.475.475 0 0 0-.307.105.48.48 0 0 0-.157.28l-.14.699a.4.4 0 0 0 .088.34c.081.1.189.15.323.15Zm-1.145-.498.175-.9a1.219 1.219 0 0 1 1.197-.988h.49c.18 0 .35.035.507.105a1.23 1.23 0 0 1 .681.682c.07.157.105.326.105.507v1.066a.882.882 0 0 1-.245.638.852.852 0 0 1-.629.245h-1.058c-.18 0-.35-.04-.506-.122-.158-.082-.289-.225-.394-.429a.994.994 0 0 1-.437.429 1.211 1.211 0 0 1-.533.122h-.236c-.081 0-.122-.04-.122-.122v-.612c0-.03.011-.055.035-.079a.107.107 0 0 1 .087-.044h.28a.579.579 0 0 0 .384-.14.595.595 0 0 0 .219-.358ZM71.336 31h-.716v-5.14h.716V31Zm-1.835-5.366v-.376c0-.222.07-.396.21-.525a.717.717 0 0 1 .515-.2h1.713v.629h-1.678a.19.19 0 0 0-.148.07.192.192 0 0 0-.062.14v.262h-.55Zm4.151 3.225c0-.367.102-.676.306-.927a1.43 1.43 0 0 1 .787-.507l1.197-.306v-.69h.717v3.103c0 .081.017.16.052.236a.693.693 0 0 0 .14.2.98.98 0 0 0 .21.132.679.679 0 0 0 .245.043h.262c.082 0 .122.041.122.123v.612c0 .081-.04.122-.122.122h-.262c-.28 0-.525-.073-.734-.218a1.476 1.476 0 0 1-.49-.577.508.508 0 0 1-.2.105.887.887 0 0 1-.246.035h-1.075c-.28 0-.5-.085-.664-.254-.163-.169-.245-.39-.245-.664v-.568Zm2.29-.962-1.022.254a.709.709 0 0 0-.402.28.784.784 0 0 0-.149.463v.594h1.573v-1.59Zm2.828 2.247a.538.538 0 0 0 .394-.167.538.538 0 0 0 .165-.393v-1.678h.717v1.678c0 .192-.038.376-.113.55-.07.17-.17.318-.298.447A1.45 1.45 0 0 1 78.63 31h-1.066a.119.119 0 0 1-.087-.035.14.14 0 0 1-.035-.087v-.603c0-.035.011-.064.035-.088a.107.107 0 0 1 .087-.044h1.206Zm.472-3.2h.83v-.83h-.83v.83Zm3.782 3.934c0 .081-.04.122-.122.122h-.306c-.192 0-.373-.035-.542-.105a1.481 1.481 0 0 1-.752-.752 1.47 1.47 0 0 1-.105-.55v-4.431h.717v4.422c0 .152.055.283.166.393a.538.538 0 0 0 .394.166h.428c.035 0 .064.015.087.044a.119.119 0 0 1 .035.088v.603Zm1.902-.735h1.294v-1.1a.436.436 0 0 0-.14-.333.464.464 0 0 0-.341-.14h-.62a.475.475 0 0 0-.306.105.48.48 0 0 0-.158.28l-.14.699a.4.4 0 0 0 .088.34c.081.1.19.15.323.15Zm-1.145-.498.175-.9a1.219 1.219 0 0 1 1.197-.988h.49c.18 0 .35.035.507.105a1.23 1.23 0 0 1 .681.682c.07.157.105.326.105.507v1.066a.882.882 0 0 1-.244.638.852.852 0 0 1-.63.245h-1.057c-.18 0-.35-.04-.507-.122-.157-.082-.288-.225-.393-.429a.995.995 0 0 1-.437.429 1.211 1.211 0 0 1-.534.122h-.236c-.081 0-.122-.04-.122-.122v-.612a.11.11 0 0 1 .035-.079.108.108 0 0 1 .087-.044h.28a.579.579 0 0 0 .385-.14.595.595 0 0 0 .218-.358Zm6.105 1.233c0 .081-.04.122-.122.122h-.306c-.192 0-.373-.035-.542-.105a1.479 1.479 0 0 1-.751-.752 1.468 1.468 0 0 1-.105-.55v-4.431h.716v4.422c0 .152.056.283.166.393a.538.538 0 0 0 .394.166h.428a.11.11 0 0 1 .088.044.118.118 0 0 1 .034.088v.603Zm2.208.122c-.21 0-.405-.047-.585-.14a1.268 1.268 0 0 1-.463-.42 1.201 1.201 0 0 1-1.05.56h-.235a.119.119 0 0 1-.088-.035.14.14 0 0 1-.035-.087v-.612a.11.11 0 0 1 .044-.088.109.109 0 0 1 .079-.035h.367a.52.52 0 0 0 .393-.166.577.577 0 0 0 .166-.41v-1.425h.726v1.442a.553.553 0 0 0 .55.56h.193a.59.59 0 0 0 .393-.14.6.6 0 0 0 .218-.367l.289-1.442.708.122-.236 1.206a.482.482 0 0 0 .113.437c.111.122.25.183.42.183h.717v-2.246h.716v2.22a.881.881 0 0 1-.245.638.852.852 0 0 1-.629.245h-.568c-.192 0-.373-.047-.542-.14a.99.99 0 0 1-.402-.428 1.162 1.162 0 0 1-.454.437 1.234 1.234 0 0 1-.56.131Z"
                ></path>
              </svg>
            </NavLink>
          </Button>
        </div>
        <div>
          <Button
            onClick={toggleDrawer(anchor, false)}
            sx={{ color: "#475569" }}
          >
            <CloseIcon />
          </Button>
        </div>
      </div>
      <Divider />
      <List>
        {nav_Link.map((text, index) => (
          <ul
            className="flex flex-col justify-start items-start px-3 py-2 w-full"
            key={index}
          >
            <NavLink
              to={text.to}
              className={(navClass) =>
                navClass.isActive
                  ? "mb-2 text-lg relative text-blue-500 font-bold flex w-full"
                  : "mb-2 text-lg text-slate-700 font-normal"
              }
            >
              <div className="absolute h-20 -right-4 -top-6 z-10 md:hidden">
                <img
                  alt="indicator"
                  src={activeImage}
                  width="17"
                  height="84"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="mr-3 flex">
                <span>{text.icon}</span>
                <span className="mr-2 text-[16px]">{text.display}</span>
              </div>
            </NavLink>
          </ul>
        ))}
      </List>
      <div className="w-full absolute bottom-4 px-2 py-2 flex justify-cenetr items-center">
        <div className="mx-2">
          <Link to="/profile/me">
            <BadgeAvatars />
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start">
          <Link to="/profile/me">
            <span className="font-bold block text-slate-600 text-sm">
              امیرمحمد حسین زاده
            </span>
          </Link>
          <span className="block opacity-60 text-sm">دانشجو</span>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="md:hidden block h-full">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ width: "10px", color: "#475569" }}
          >
            <MenuIcon fontSize="large" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default TemporaryDrawer;
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export function BadgeAvatars() {
  return (
    <Stack direction="row">
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={avatar} />
      </StyledBadge>
    </Stack>
  );
}