import {
  Container,
  CountryList,
  Heading,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [countrys, setCountrys] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!value) {
      return;
    }
    const fetchByReg = async () => {
      try {
        const region = await fetchByRegion(value);

        setCountrys(region);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchByReg();
  }, [value]);

  const submit = value => {
    setValue(value);
  };

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <SearchForm onSubmit={submit} />
        <CountryList countries={countrys} />
      </Container>
    </Section>
  );
};
