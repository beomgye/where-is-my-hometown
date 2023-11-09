import Container from '@/components/common/Container';
import Form from '@/components/common/Form';
import Radio from '@/components/common/Radio';
import { StepOptions, TransactionTypeOptions } from '@/constants';
import { MultiFormProps } from '@/types/form';
import { FormHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FaHome, FaKey, FaMoneyBill } from 'react-icons/fa';

interface TransactionTypeFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<MultiFormProps>;
  watch;
  goBackButton: boolean;
  onGoBack: () => void;
}

const getTransactionIcon = (type) => {
  switch (type) {
    case '월세':
      return <FaMoneyBill />;
    case '전세':
      return <FaKey />;
    case '매매':
      return <FaHome />;
    default:
      return null;
  }
};

const TransactionTypeForm = ({
  control,
  watch,
  goBackButton,
  onGoBack,
  ...props
}: TransactionTypeFormProps) => {
  const selectedValue = watch('transactionType');

  return (
    <Form
      title="거래 방식"
      description="전세, 월세, 매매를 선택해 주세요."
      navbarProps={{
        current: 2,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      goBackButton={goBackButton}
      onGoBack={onGoBack}
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
                    value={type.value}
                    onChange={() => field.onChange(type.id)}
                    checked={selectedValue === type.id}
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
