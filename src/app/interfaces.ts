export interface IUser {
  header: string;
  body: string;
  id: string;
}

export enum Role {
  UXDirector = 'ux-director',
  UXManager = 'ux-manager',
  UXDesigner = 'ux-designer',
  UXEngineer = 'uz-engineer',
  SummerIntern = 'summer-intern'
}