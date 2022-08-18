import React from 'react';
import styled from 'styled-components';
import TabViewer from './TabViewer';


const CompanyProfile = () => {
  return (
    <React.Fragment>
      <Container>
        <TabViewer title="Company Profile" />
        <DataContainer>
          <Data>
            <h1>About Us</h1>
            <p>Akora Seeds Company (ASC) is an emerging seed company in Pakistan and is actively committed to research, production and sale & marketing of innovative, high yielding and high quality improved and hybrid vegetable varieties. <br /><br />
            We have over 20 years of a rich history of development & farming experience that gives our company a reputation for innovation and the quality of varieties we develop/introduce. <br /><br />
            In order to guarantee our seeds, we constantly monitor the quality by performing field evaluations and tests to study seeds germination in our lab as well as with Government line department. Moreover, in our experimental station, all hybrids and improved varieties are assessed comprehensively by our qualified team and skilled technicians, and varieties; showing resilience, uniformity, high yield potential, prolong shelf life, resistance capacity to a wide range of diseases & biotic/abiotic stresses and adoptability for a specific agro-climatic conditions are put forward for marketing and commercial level cultivation. Further, the seeds are stored in standard storage units where temperature and humidity levels are monitored to ensure the highest quality of our seeds. <br /><br />
            We work closely with the farmer’s community and all players in this chain to develop new varieties that meet all their needs and expectations, and that contribute to a better world with production and provision of healthier vegetables. <br /><br />
            We are equipped with all necessary machineries and equipments to complete the calibrating, drying, cleaning, sorting, weighing, counting and standard packaging of products distributed to the national and international markets. Our professional marketing team evaluates the current trends in seed industry, need of a specific local area/market and expectations of the grower’s community; and executed with a refined action plan to ensure maximum coverage. <br /><br />
            We provide an ever-growing portfolio of hybrid varieties in the Tomato, Hot & Sweet Pepper, Cucumber, Long & Round Squash, Cauliflower, Cabbage, Okra, Onion, Ridge & Sponge Gourd, Muskmelon and Watermelon.
            </p>
          </Data>
        </DataContainer>
      </Container>
    </React.Fragment>
  )
}

export default CompanyProfile;

const Container = styled.div`
  position: relative;
  width: 100%;
  background: rgb(248, 248, 248);
`


const DataContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`
const Data = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 50px 0;

  h1 {
    color: var(--heading);
    font-family: GilroyBold;
    // font-weight: bold;
  }

  p {
    line-height: 1.7;
    font-size: 18px;
    letter-spacing: 1.2px;
    font-family: Gilroy;
  }
`