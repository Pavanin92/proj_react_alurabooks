
import Search from "../components/Search";
import NewReleases from "../components/NewReleases";
import styled from "styled-components";

const AppContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Search />
      <NewReleases />
    </AppContainer>
  );
}

export default Home;
