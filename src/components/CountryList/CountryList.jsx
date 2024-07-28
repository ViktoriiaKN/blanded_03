import { Link } from "react-router-dom";
import { Grid, GridItem } from "..";

export const CountryList = ({countries}) => {
  return <Grid>
    {countries.map((countrie) => <GridItem key={countrie.id}>
  <Link >
    <img src={countrie.flag} alt={countrie.countrie} />
  </Link>
</GridItem>)}
  </Grid>;
};
