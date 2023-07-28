import styled from "styled-components";
import Card from "../components/Card.js";
import useSWR from "swr";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 53px;
  right: 20px;
  width: 60px; /* Set the width to 30px */
  height: 60px; /* Set the height to 30px */
`;
export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {data.map((place) => {
          return (
            <ListItem key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </ListItem>
          );
        })}
      </List>
      <FixedLink href="/create" passHref legacyBehavior>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          width="30px"
          height="30px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </FixedLink>
    </>
  );
}
