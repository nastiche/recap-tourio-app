import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";
import { StyledButton } from "../../../components/StyledButton.js";
import { StyledImage } from "../../../components/StyledImage.js";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  margin-top: 10px;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  margin-top: 25px;

  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;

const StyledLocationLink = styled(StyledLink)`
  text-align: center;
  background-color: white;
  border: 3px solid #f15a00;
  color: black;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: place, isLoading, error, mutate } = useSWR(`/api/places/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePlace() {
    const response = await fetch(`/api/places/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      mutate();
    }
    router.push(`/`);
  }

  return (
    <>
      <Wrapper>
        <Link href={"/"} passHref legacyBehavior>
          <StyledLink justifySelf="start">back</StyledLink>
        </Link>
      </Wrapper>
      <ImageContainer>
        <StyledImage
          src={place.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
      <StyledTitle>
        {place.name}, {place.location}
      </StyledTitle>
      <Link href={place.mapURL} passHref legacyBehavior>
        <StyledLocationLink>Location on Google Maps</StyledLocationLink>
      </Link>
      <p>{place.description}</p>
      <ButtonContainer>
        <Link href={`/places/${id}/edit`} passHref legacyBehavior>
          <StyledLink>Edit</StyledLink>
        </Link>
        <StyledButton onClick={deletePlace} type="button" variant="delete">
          Delete
        </StyledButton>
      </ButtonContainer>
    </>
  );
}
