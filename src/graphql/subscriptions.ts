/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onCreateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onUpdateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onDeleteBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onCreateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onUpdateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onDeleteReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateFavorite = /* GraphQL */ `subscription OnCreateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onCreateFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFavoriteSubscriptionVariables,
  APITypes.OnCreateFavoriteSubscription
>;
export const onUpdateFavorite = /* GraphQL */ `subscription OnUpdateFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onUpdateFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFavoriteSubscriptionVariables,
  APITypes.OnUpdateFavoriteSubscription
>;
export const onDeleteFavorite = /* GraphQL */ `subscription OnDeleteFavorite(
  $filter: ModelSubscriptionFavoriteFilterInput
  $owner: String
) {
  onDeleteFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFavoriteSubscriptionVariables,
  APITypes.OnDeleteFavoriteSubscription
>;
