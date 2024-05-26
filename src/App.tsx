import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./styles/clock.css";
import "./countdown.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-white">
      <div className="flex-grow w-full max-w-[430px] flex flex-col items-center bg-white text-black shadow-app-wrapper">
        {/* 상단 네브바 */}
        <div className="flex flex-row items-center justify-between w-full px-4 h-[52px] border-b-[1px]">
          <img className="h-5 " src="/images/header/home.svg" />
          <img className="w-7 h-7" src="icons/lion.svg" />
        </div>
        {/* 상단 네브바 */}

        <div className="flex-col items-center justify-center flex-grow">
          <div className="pt-8 Head1 text-main-400">
            <div>2024 봄 대동제</div>
            <div>축제사이트 오픈까지...</div>
            <div className="pt-4 Body3 text-font-info">
              <p>안전하게 그리고 무아지경으로, 축제를 즐기시길 바랍니다!</p>
            </div>
          </div>

          <FlipClockCountdown
            className="flip-clock"
            to={new Date("2024-05-27T09:00:00")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
