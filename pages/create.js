import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWR from "swr";

const StyledTitle = styled.h2`
  color: #f15a00;
  margin-bottom: 0.8rem;
  margin-top: 10px;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  const { mutate } = useSWR("api/places");

  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      mutate();
    }
    router.push("/");
  }

  return (
    <>
      <StyledLink href="/" passHref legacyBehavior variant="back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="white"
          width="30px"
          height="30px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </StyledLink>
      <StyledTitle id="add-place">Add Place</StyledTitle>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
