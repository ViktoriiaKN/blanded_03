import { Container, CountryList, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
const [countries, setCountries] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
  const getData = async () => {
    try {
      const countries = await getCountries();
      setCountries(countries);
    } catch (error) {
      setError(error.message);
    }
  }
  getData();
}, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
