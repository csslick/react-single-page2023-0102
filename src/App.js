import './App.css';
import Header from './components/Header'
import Section from './components/Section';

function App() {

  return (
    <>
      <Header />

      {/* 디즈니 대표 섹션 */}
      <Section 
        title="디즈니 플러스" 
        logo="logo-dp.png" 
        bg="bg-dp.jpg"
        id="title"
      />

      {/* 디즈니 */}
      <Section 
        title="디즈니" 
        logo="logo-d.png" 
        bg="bg-d.jpg"
        id="디즈니"
      />

      {/* 마블 */}

      {/* 스타워즈 */}

      {/* 네셔널지오그래피 */}

      {/* 20세기 스튜디오 */}


    </>
  );
}

export default App;

