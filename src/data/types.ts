// Tipos para modelar la estructura de `DataMenopausia.ts`

export type TreatmentName =
  | "THM combinada oral"
  | "THM combinada trans"
  | "THM solo estrógeno oral"
  | "THM solo estrógeno trans"
  | "Tibolona"
  | "THM local";

export type NestedVal = {
  val: number | "NA";
  condition: string;
};

export type DualVal = {
  C: NestedVal;
  I: NestedVal;
};

export type DualValConditionOnly = {
  condicion1: NestedVal;
  condicion2: NestedVal;
};

export type Value = number | "NA" | DualVal | NestedVal | DualValConditionOnly;

export type ValuesMap = Partial<Record<TreatmentName, Value>>;

export interface DataNode {
  label: string;
  children?: DataNode[];
  values?: ValuesMap;
}

export type CondicionesMenopausia = DataNode[];
