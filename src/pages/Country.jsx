import { Container, CountryInfo, Heading, Section } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [error, setError] = useState(null);
  const [country, setCountry] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const country = await fetchCountry(countryId);
        setCountry(country);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [countryId]);
  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
