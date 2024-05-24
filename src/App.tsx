function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-white">
      <div className="flex-grow w-full max-w-[430px] flex flex-col items-center bg-white text-black shadow-app-wrapper">
        {/* 상단 네브바 */}
        <div className="flex flex-row items-center justify-between w-full px-4 h-[52px] border-b-[1px]">
          <img className="w-[120px] h-5 bg-black" />
          <img className="w-7 h-7 bg-red-50" />
        </div>
        {/* 상단 네브바 */}

        {/* 카운트 다운 */}
        <div>
          <div>2024 봄 대동제</div>
          <div>축제사이트 오픈까지</div>
        </div>
        {/* 카운트 다운 */}
      </div>
    </div>
  );
}

export default App;
