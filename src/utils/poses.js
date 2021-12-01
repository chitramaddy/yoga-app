import { assertType } from "graphql";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckwlkfio21lva01xuhteu0irb/master"
);

export const getPoses = async () => {
  const { poses } = await graphcms.request(
    `{
      poses {
    poseName
    slug
    steps{
      text
    }
    poseImage{
      id
      fileName
      height
      width
      url
    }
  }
}`
  );

  return poses;
};

export const getPoseSlugs = async () => {
  const { poses } = await graphcms.request(
    `{
        poses {
          id
          slug
            }
        }`
  );

  return poses.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });
};

export const getPoseDetail = async (poseSlug) => {
  const { pose } = await graphcms.request(
    `query PosePageQuery($poseSlug: String!){
      pose(where: { slug: $poseSlug }) {
        poseName
        id
        slug
        steps {
          html
        }
        poseImage {
          id
          fileName
          url
          height
          width
        }
      }
    }`,
    {
      poseSlug,
    }
  );

  return pose;
};
