import {Workflow} from "../entities/workflow.entity";
import {Entity} from "../../../../shared/entity";
import {StepGroup} from "../entities/step-group.entity";

const groups: StepGroup[] = [
  new StepGroup({name: 'Request a Software', position: 0, steps: []})
    .addStep('Procurement review'),
  new StepGroup({name: 'FP&A', position: 1, steps: []})
    .addStep('FP&A Approval'),
  new StepGroup({name: 'Procurement review', position: 2, steps: []})
    .addStep('Security Review')
    .addStep('Legal Review')
    .addStep('IT review'),
  new StepGroup({name: 'Vendor', position: 3, steps: []})
    .addStep('Vendor Onboarding'),
  new StepGroup({name: 'Contract', position: 4, steps: []})
    .addStep('Create PO')
    .addStep('Contract Execution'),
  new StepGroup({name: 'Finalization', position: 5, steps: []})
    .addStep('Finalize request details')
]

export const workflowDemo = new Workflow({...Entity.createNew(), groups: groups, name: 'PO creation'})
