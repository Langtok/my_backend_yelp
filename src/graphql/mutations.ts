/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
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
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
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
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
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
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createFavorite = /* GraphQL */ `mutation CreateFavorite(
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
` as GeneratedMutation<
  APITypes.CreateFavoriteMutationVariables,
  APITypes.CreateFavoriteMutation
>;
export const updateFavorite = /* GraphQL */ `mutation UpdateFavorite(
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
` as GeneratedMutation<
  APITypes.UpdateFavoriteMutationVariables,
  APITypes.UpdateFavoriteMutation
>;
export const deleteFavorite = /* GraphQL */ `mutation DeleteFavorite(
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
` as GeneratedMutation<
  APITypes.DeleteFavoriteMutationVariables,
  APITypes.DeleteFavoriteMutation
>;
