import { Controller } from 'react-hook-form';
import { FaMoneyBill, FaKey, FaHome } from 'react-icons/fa';
import { Form, Container, Radio } from '@/components';
import { Step, StepOptions, Transaction, TransactionTypeOptions } from '@/constants';

const getTransactionIcon = (type) => {
  switch (type) {
    case Transaction.MONTHLY:
      return <FaMoneyBill />;
    case Transaction.JEONSE:
      return <FaKey />;
    case Transaction.SALE:
      return <FaHome />;
    default:
      return null;
  }
};

const TransactionTypeForm = ({ control, watch, ...props }) => {
  const selectedValue = watch('transactionType');

  return (
    <Form
      title="거래 방식"
      description="전세, 월세, 매매를 선택해 주세요."
      navbarProps={{
        current: Step.TRANSACTION,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      <Container>
        {TransactionTypeOptions && TransactionTypeOptions.length > 0
          ? TransactionTypeOptions.map((type) => (
              <Controller
                key={`transactionType[${type.value}]`}
                name="transactionType"
                control={control}
                render={({ field }) => (
                  <Radio
                    id={`transactionType[${type.id}]`}
                    name="transactionType"
                    radioProps={type}
                    value={type.value}
                    onChange={() => field.onChange(type.value)}
                    checked={selectedValue === type.value}
                    icon={getTransactionIcon(type.value)}
                  />
                )}
              />
            ))
          : ''}
      </Container>
    </Form>
  );
};

export default TransactionTypeForm;
