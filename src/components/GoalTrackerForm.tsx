import { Button, Heading, Input, Select } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

interface Hike {
  name: string;
  distance: number;
  difficulty: string;
  location: string;
  climb: number;
}

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const GoalTrackerForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Heading fontSize="2xl">Goal Form</Heading>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <Input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="distance" className="form-label">
          Distance
        </label>
        <Input
          {...register("distance")}
          id="distance"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="difficulty" className="form-label">
          Difficulty
        </label>
        <Select
          {...register("difficulty")}
          id="difficulty"
          className="form-control"
        >
          <option value="">Select Difficulty...</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
          <option value="Very Hard">Very Hard</option>
        </Select>
      </div>
      <div>
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <Input
          {...register("location")}
          id="location"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="climb" className="form-label">
          Climb
        </label>
        <Input
          {...register("climb")}
          id="climb"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <Button mt={2} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default GoalTrackerForm;
