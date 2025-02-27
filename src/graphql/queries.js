/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const reviewsByBusinessID = /* GraphQL */ `
  query ReviewsByBusinessID(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByBusinessID(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const favoritesByBusinessID = /* GraphQL */ `
  query FavoritesByBusinessID(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByBusinessID(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
