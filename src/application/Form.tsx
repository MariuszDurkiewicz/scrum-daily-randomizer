import React, {
  useState,
  useRef,
  useCallback,
  SyntheticEvent,
  useEffect,
} from "react";

export default function Form({ data, onSubmit, disabled }) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    if (data) setFormData(data);
  }, [data]);

  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const role = useRef<HTMLInputElement>(null);
  const team = useRef<HTMLInputElement>(null);
  const status1 = useRef<HTMLInputElement>(null);
  const status2 = useRef<HTMLInputElement>(null);

  const onChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const refs: [string, React.RefObject<HTMLInputElement>][] = [
        ["id", id],
        ["name", name],
        ["role", role],
        ["team", team],
        ["status", status1],
        ["status", status2],
      ];

      const elem = refs.find((el) => el[1].current === e.target);
      if (elem) {
        setFormData({
          ...formData,
          [elem[0]]: elem[1].current?.value,
        });
      }
    },
    [formData, setFormData]
  );

  const onClick = useCallback(() => {
    onSubmit(formData);
  }, [formData, onSubmit]);

  return (
    <div className="form">
      <p>
        <span>Name</span>
        <input
          ref={name}
          value={(formData && formData.name) || ""}
          onChange={onChange}
        />
      </p>
      <p>
        <span>E-mail</span>
        <input
          ref={id}
          value={(formData && formData.id) || ""}
          onChange={onChange}
        />
      </p>
      <p>
        <span>Role</span>
        <input
          ref={role}
          value={(formData && formData.role) || ""}
          onChange={onChange}
        />
      </p>
      <p>
        <span>Team</span>
        <input
          ref={team}
          value={(formData && formData.team) || ""}
          onChange={onChange}
        />
      </p>
      <p>
        <span>Status</span>
        <input
          ref={status1}
          type="radio"
          value="online"
          checked={formData && formData.status === "online"}
          onChange={onChange}
        />
        online
        <input
          ref={status2}
          type="radio"
          value="offline"
          checked={formData && formData.status === "offline"}
          onChange={onChange}
        />
        offline
      </p>

      <p>
        <button
          className="button_secondary"
          onClick={onClick}
          disabled={disabled}
        >
          Create new user
        </button>
      </p>
    </div>
  );
}
