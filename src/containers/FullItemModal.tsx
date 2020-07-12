import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useFetchFullPokemon } from '../hooks/useFetchFullPokemon';
import { SkeletonLine } from '../components/UI/SkeletonLine';
import Backdrop from '../components/UI/Backdrop';
import PhotoCaroussel from '../components/PhotoCaroussel';

const StyledFullItemModal = styled.div`
  width: 60%;
  min-height: 500px;
  min-width: 500px;
  max-width: 650px;
  max-height: 750px;
  background-color: ${({ theme }) => theme.light};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: stretch;
  position: relative;
  box-shadow: 0 0 7px #247ba0;
`;

const PhotoBlock = styled.div`
  min-width: 200px;
  flex: 0.4;
`;

const InfoBlock = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const InfoSection = styled.div`
  margin: 0;
`;

const Label = styled.label`
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  color: #33658a;
`;

const InfoText = styled.p`
  margin: 0;
`;

const ErrorMessage = styled.p``;

const CloseButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
  padding: 0 10px;
  border: 3px solid ${({ theme }) => theme.pumpkin};
  color: ${({ theme }) => theme.pumpkin};

  border-radius: 10px;
  background-color: transparent;
`;

// Skeleton-related styles

const PhotoSkeleton = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

const LabelSkeleton = styled.div`
  position: relative;
  height: 27px;
  width: 130px;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const TextSkeleton = styled.div`
  position: relative;
  height: 22px;
  width: 200px;
  border-radius: 5px;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const FullItemModal: React.FC = () => {
  const { pokemonName } = useParams();
  const history = useHistory();
  const { data, loading, error } = useFetchFullPokemon(pokemonName);

  const closeViewHandler = () => {
    history.push('/');
  };

  const loadingItem = (
    <Backdrop>
      <StyledFullItemModal>
        <PhotoBlock>
          <PhotoSkeleton>
            <SkeletonLine />
          </PhotoSkeleton>
        </PhotoBlock>
        <InfoBlock>
          {[0, 1, 2, 3, 4].map((v) => (
            <InfoSection key={v}>
              <LabelSkeleton>
                <SkeletonLine />
              </LabelSkeleton>
              <TextSkeleton>
                <SkeletonLine />
              </TextSkeleton>
            </InfoSection>
          ))}
        </InfoBlock>
      </StyledFullItemModal>
    </Backdrop>
  );

  return loading ? (
    loadingItem
  ) : error ? (
    <ErrorMessage>Error occured :(</ErrorMessage>
  ) : (
    data && (
      <Backdrop>
        <StyledFullItemModal>
          <PhotoBlock>
            <PhotoCaroussel photos={data.photos} />
          </PhotoBlock>
          <InfoBlock>
            <InfoSection>
              <Label>Name</Label>
              <InfoText>{data.name}</InfoText>
            </InfoSection>
            <InfoSection>
              <Label>Order</Label>
              <InfoText>{data.order}</InfoText>
            </InfoSection>
            <InfoSection>
              <Label>Types</Label>
              <InfoText>{data.types.join(', ')}</InfoText>
            </InfoSection>
            <InfoSection>
              <Label>Abilities</Label>
              <InfoText>{data.abilities.join(', ')}</InfoText>
            </InfoSection>
            <InfoSection>
              <Label>Moves</Label>
              <InfoText>{data.moves.slice(0, 15).join(', ')}</InfoText>
            </InfoSection>
          </InfoBlock>
          <CloseButton onClick={closeViewHandler}>Close</CloseButton>
        </StyledFullItemModal>
      </Backdrop>
    )
  );
};

export default FullItemModal;
