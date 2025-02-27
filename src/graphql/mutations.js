/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          businessID
          userID
          createdAt
          updatedAt
          userFavoritesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          businessID
          userID
          createdAt
          updatedAt
          userFavoritesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      favorites {
        items {
          id
          businessID
          userID
          createdAt
          updatedAt
          userFavoritesId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
      id
      name
      category
      address
      latitude
      longitude
      rating
      images
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
      id
      name
      category
      address
      latitude
      longitude
      rating
      images
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
      id
      name
      category
      address
      latitude
      longitude
      rating
      images
      reviews {
        items {
          id
          content
          rating
          businessID
          owner
          createdAt
          updatedAt
          userReviewsId
          businessReviewsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      content
      rating
      businessID
      owner
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      content
      rating
      businessID
      owner
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      content
      rating
      businessID
      owner
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
