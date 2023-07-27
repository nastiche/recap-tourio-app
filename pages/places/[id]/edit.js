import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../components/Form.js";
import { StyledLink } from "../../../components/StyledLink.js";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #fea022;
  margin-bottom: 0.8rem;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error, mutate } = useSWR(`/api/places/${id}`);

  async function editPlace(place) {
    const response = await fetch(`/api/places/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      mutate();
    }
    router.push(`/places/${id}`);
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <Wrapper>
        <Link href={`/places/${id}`} passHref legacyBehavior>
          <StyledLink justifySelf="start">back</StyledLink>
        </Link>
      </Wrapper>
      <StyledTitle id="edit-place">Edit Place</StyledTitle>
      <Form onSubmit={editPlace} formName={"edit-place"} defaultData={place} />
    </>
  );
}
