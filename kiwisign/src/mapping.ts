import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ContractRegistered as ContractRegisteredEvent,
  ContractSigned as ContractSignedEvent,
  Transfer as TransferEvent
} from "../generated/KiwiSign/KiwiSign"
import {
  Approval,
  ApprovalForAll,
  ContractRegistered,
  ContractSigned,
  Transfer
} from "../generated/schema"

export function handleContractRegistered(event: ContractRegisteredEvent): void {
  let entity = new ContractRegistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.contract_id = event.params.contract_id
  entity.metadata = event.params.metadata
  entity.save()
}

export function handleContractSigned(event: ContractSignedEvent): void {
  let entity = new ContractSigned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.contract_id = event.params.contract_id
  entity.input = event.params.input
  entity.signer = event.params.signer
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
