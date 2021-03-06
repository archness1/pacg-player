import { PlayerCharacter } from "../../../firestore/characters";
import { Powers } from "./Powers";
import { makeStyles } from "@material-ui/core/styles";
import { Powers as PowersType } from "../../../firestore/wiki/character";
import React from "react";

const useStyles = makeStyles((theme) => ({
  disabledRole: {
    color: theme.palette.text.disabled,
  },
}));

export function Role({
  role,
  disabled,
  deck,
  update,
}: {
  role: PowersType & { name: string };
  disabled: boolean;
  deck: PlayerCharacter;
  update(values: Partial<PlayerCharacter>): void;
}) {
  const styles = useStyles();

  return (
    <div className={disabled ? styles.disabledRole : undefined}>
      <Powers
        powers={role.powers as { optional: boolean; texts: string[] }[]}
        powerCheckboxesValues={disabled ? [] : deck.rolePowers}
        updatePowerCheckboxes={(values) =>
          disabled ? null : update({ rolePowers: values })
        }
        proficiencies={role.proficiencies}
        proficienciesValues={disabled ? {} : deck.roleProficiencies}
        updateProficienciesValues={(values) =>
          disabled ? null : update({ roleProficiencies: values })
        }
        handSize={role.handSize}
        handSizeValues={disabled ? [] : deck.roleHandSize}
        updateHandSizeValues={(values) =>
          disabled ? null : update({ roleHandSize: values })
        }
        disabled={disabled}
      />
    </div>
  );
}
