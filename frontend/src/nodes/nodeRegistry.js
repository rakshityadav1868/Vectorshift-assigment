// Central registry that maps node types

import { InputNode } from "./inputNode";
import { OutputNode } from "./outputNode";
import { LLMNode } from "./llmNode";
import { TextNode } from "./textNode";
import { ApiNode } from "./apiNode";
import { ConditionNode } from "./conditionNode";
import { DelayNode } from "./delayNode";
import { FilterNode } from "./filterNode";
import { MergeNode } from "./mergeNode";

export const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  api: ApiNode,
  condition: ConditionNode,
  delay: DelayNode,
  filter: FilterNode,
  merge: MergeNode,
};