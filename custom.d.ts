declare module '*.svg' {
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;
  export default content;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const Schema: DocumentNode;

  export = Schema
}
